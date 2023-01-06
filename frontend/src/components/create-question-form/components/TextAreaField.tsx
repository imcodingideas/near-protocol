import { HTMLInputTypeAttribute, TextareaHTMLAttributes } from 'react';
import { css } from '../../../utils';
import styles from './FormField.module.css';

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    placeholder: string;
    error: string | null;
}

export const TextAreaField = ({ name, placeholder, error, ...props }: TextAreaFieldProps) => {
    return (
        <div className={styles.container}>
            <textarea {...props} className={css(styles.field, props.className)} name={name} placeholder="&nbsp;" />
            <label htmlFor={name} className={styles.placeholder} aria-label={placeholder}>{placeholder}</label>
            {error && <p className={styles.error}>{error}</p>}
        </div >

    )
};