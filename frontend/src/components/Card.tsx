import { PropsWithChildren } from 'react'
import styles from './Card.module.css'

interface CardProps { }

export const Card = ({ children }: PropsWithChildren<CardProps>) => {
    return (
        <div className={styles.card}>{children}</div>
    )
}