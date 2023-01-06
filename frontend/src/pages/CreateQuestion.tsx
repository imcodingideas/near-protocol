import { CreateQuestionForm } from '../components/create-question-form/CreateQuestionForm';
import styles from './CreateQuestion.module.css';

export const CreateQuestion = () => (
    <div className={styles.container}>
        <CreateQuestionForm />
    </div>
);
