import { FormHTMLAttributes } from 'react';
import {
    CreateQuestionShape
} from '../../validations/create-question.validation';
import { Button } from '../Button';
import { Card } from '../Card';
import { Divider } from '../Divider';
import { FormField } from './components/FormField';
import { TextAreaField } from './components/TextAreaField';
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

                <FormField
                    error={titleError}
                    name={CreateQuestionShape.title}
                    placeholder="Enter the question title"
                />

                <TextAreaField
                    error={bodyError}
                    name={CreateQuestionShape.body}
                    placeholder="Write your question here"
                    rows={10}
                    cols={33}
                />

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


                <div className={styles.submit}>
                    <Button type="submit">Post</Button>
                </div>
            </Card>
        </>
    )
}
