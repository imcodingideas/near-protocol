import { PropsWithChildren, ElementType } from 'react'
import { css } from '../utils';
import styles from './Card.module.css'

type CardProps<P = {}> = P & {
    as?: ElementType;
    className?: string;
}

export const Card = <P = {}>({ children, as = "div", ...props }: PropsWithChildren<CardProps<P>>) => {
    const Component = as;

    return (
        <Component {...props} className={css(styles.card, props.className)}>{children}</Component>
    )
}