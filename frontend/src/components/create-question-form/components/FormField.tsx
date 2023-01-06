import { HTMLInputTypeAttribute } from 'react';
import styles from './FormField.module.css';

interface FormFieldProps {
    name: string;
    placeholder: string;
    error: string | null;
    type?: HTMLInputTypeAttribute;
}

export const FormField = ({ name, placeholder, error, type = 'text' }: FormFieldProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.field} aria-label={placeholder}>
                <input name={name} type={type} />
            </label>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
};