import { FormHTMLAttributes } from 'react';
import {
    CreateQuestionShape
} from '../../validations/create-question.validation';
import { Button } from '../Button';
import { Card } from '../Card';
import { Divider } from '../Divider';
import styles from './CreateQuestionForm.module.css';
import { useCreateQuestionForm } from './hooks/useCreateQuestionForm';

export const CreateQuestionForm = () => {
    const {
        bodyError,
        createQuestionError,
        handleSubmit,
        titleError,
        isLoading
    } = useCreateQuestionForm();

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

                {isLoading && (
                    <div>
                        <p className={styles.loading}>Posting...</p>
                    </div>
                )}
                <Button type="submit">Post</Button>
            </Card>
        </>
    )
}
