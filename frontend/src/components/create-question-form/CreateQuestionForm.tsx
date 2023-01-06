import { useState, FormHTMLAttributes } from 'react';
import {
    CreateQuestionSchema,
    CreateQuestionShape,
    CreateQuestionShapeKeys
} from '../../validations/create-question.validation'
import { Card } from '../Card';
import { Divider } from '../Divider';
import { Button } from '../Button';
import styles from './CreateQuestionForm.module.css';

export const CreateQuestionForm = () => {
    const [titleError, setTitleError] = useState<string | null>(null);
    const [bodyError, setBodyError] = useState<string | null>(null);

    const resetErrors = () => {
        setTitleError(null);
        setBodyError(null);
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        resetErrors();

        const formData = new FormData(e.currentTarget);

        const validation = CreateQuestionSchema.safeParse({
            title: formData.get(CreateQuestionShape.title),
            body: formData.get(CreateQuestionShape.body),
        });

        const HANDLE_ERROR: Record<CreateQuestionShapeKeys, ((error: string) => void) | undefined> = {
            [CreateQuestionShape.title]: setTitleError,
            [CreateQuestionShape.body]: setBodyError,
        };

        if (!validation.success) {

            validation.error.errors.forEach((error) => {
                const path = error.path as [CreateQuestionShapeKeys];
                const type = path[0];

                HANDLE_ERROR[type]?.(error.message);
            });
            return;
        }

        const data = validation.data;

        console.log({ data });
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

                <Button type="submit">Post</Button>
            </Card>
        </>
    )
}
