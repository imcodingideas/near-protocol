import styles from './Divider.module.css';
import { css } from '../utils'

interface DividerProps {
    className?: string;
}

export const Divider = ({ className }: DividerProps) => {
    return (
        <hr className={css(styles.divider, className)} />
    )
};
