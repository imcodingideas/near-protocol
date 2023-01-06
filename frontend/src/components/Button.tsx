import { ButtonHTMLAttributes } from 'react';
import { css } from '../utils';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
};

export const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props} type={props.type || "button"} className={css(styles.btn, props.className)}>
    {children}
  </button>
);
