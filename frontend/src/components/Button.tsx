import { ButtonHTMLAttributes } from 'react';
import { css } from '../utils';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
};

export const Button = ({ text, ...props }: ButtonProps) => (
  <button {...props} type={props.type || "button"} className={css(styles.btn, props.className)}>
    {text}
  </button>
);
