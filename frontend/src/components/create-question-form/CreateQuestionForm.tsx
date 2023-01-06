import { useRouter } from '@tanstack/react-router'
import { useState, FormHTMLAttributes } from 'react';
import {
    CreateQuestionSchema,
    CreateQuestionShape,
    CreateQuestionShapeKeys
} from '../../validations/create-question.validation';
import { useCreateQuestion } from '../../hooks/useCreateQuestion';
import { Question } from '../../types';
import { Card } from '../Card';
import { Divider } from '../Divider';
import { Button } from '../Button';
import styles from './CreateQuestionForm.module.css';

export const CreateQuestionForm = () => {
    const router = useRouter();
    const [titleError, setTitleError] = useState<string | null>(null);
    const [bodyError, setBodyError] = useState<string | null>(null);
    const [createQuestionError, setCreateQuestionError] = useState<string | null>(null);

    const { mutate: createQuestionMutation } = useCreateQuestion({
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

    return (
        <>
            <Card<FormHTMLAttributes<HTMLFormElement>> onSubmit={handleSubmit} as={"form"}>
                <h3 className={styles.title}>New Question</h3>
                <Divider />
                <div className={styles.inputContainer}>
                    <label aria-label="Enter the question title">
                        <input name={CreateQuestionShape.title} type="text" />
                    </label>
                    {titleError && <p className={styles.error}>{titleError}</p>}
                </div>

                <div className={styles.inputContainer}>
                    <label aria-label="Write your question here">
                        <input name={CreateQuestionShape.body} type="text" />
                    </label>
                    {bodyError && <p className={styles.error}>{bodyError}</p>}
                </div>


                {createQuestionError && (
                    <div>
                        <p className={styles.error}>{createQuestionError}</p>
                    </div>
                )}
                <Button type="submit">Post</Button>
            </Card>
        </>
    )
}
