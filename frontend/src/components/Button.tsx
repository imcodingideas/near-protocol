import styles from './Button.module.css';

type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => (
  <button type="button" className={styles.btn}>
    {text}
  </button>
);
