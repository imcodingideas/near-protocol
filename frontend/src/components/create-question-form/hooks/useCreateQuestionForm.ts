import { useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { useCreateQuestion } from '../../../hooks/useCreateQuestion';
import {
    CreateQuestionSchema,
    CreateQuestionShape,
    CreateQuestionShapeKeys
} from '../../../validations/create-question.validation';


export const useCreateQuestionForm = () => {
    const router = useRouter();
    const [titleError, setTitleError] = useState<string | null>(null);
    const [bodyError, setBodyError] = useState<string | null>(null);
    const [createQuestionError, setCreateQuestionError] = useState<string | null>(null);

    const { mutate: createQuestionMutation, reset: resetCreateQuestionMutation, isLoading } = useCreateQuestion({
        onSuccess: async () => {
            await router.navigate({
                to: '/',
            })
        },
        onError: (error) => {
            setCreateQuestionError(error.message);
        }
    });

    const resetErrors = () => {
        setTitleError(null);
        setBodyError(null);
        setCreateQuestionError(null);
        resetCreateQuestionMutation();
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        resetErrors();

        const formData = new FormData(e.currentTarget);

        const validation = CreateQuestionSchema.safeParse({
            title: formData.get(CreateQuestionShape.title),
            body: formData.get(CreateQuestionShape.body),
        });

        const setError: Record<CreateQuestionShapeKeys, ((error: string) => void) | undefined> = {
            title: setTitleError,
            body: setBodyError,
        };

        if (!validation.success) {
            validation.error.errors.forEach((error) => {
                const path = error.path as [CreateQuestionShapeKeys];
                const type = path[0];

                setError[type]?.(error.message);
            });
            return;
        }

        createQuestionMutation(validation.data);
    };

    return {
        handleSubmit,
        titleError,
        bodyError,
        createQuestionError,
        isLoading,
    }
}