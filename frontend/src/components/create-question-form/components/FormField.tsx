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
            <input className={styles.field} name={name} type={type} placeholder="&nbsp;" />
            <label htmlFor={name} className={styles.placeholder} aria-label={placeholder}>{placeholder}</label>
            {error && <p className={styles.error}>{error}</p>}
        </div >

    )
};