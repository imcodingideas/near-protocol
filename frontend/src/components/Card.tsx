import { PropsWithChildren, ElementType } from 'react'
import styles from './Card.module.css'

type CardProps<P = {}> = P & {
    as?: ElementType;
}

export const Card = <P = {}>({ children, as = "div" }: PropsWithChildren<CardProps<P>>) => {
    const Component = as;

    return (
        <Component className={styles.card}>{children}</Component>
    )
}