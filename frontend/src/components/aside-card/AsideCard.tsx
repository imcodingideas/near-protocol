import { PropsWithChildren } from 'react'
import styles from './AsideCard.module.css'

export interface AsideCardProps {
    title: string;
}

export const AsideCard = ({ children, title }: PropsWithChildren<AsideCardProps>) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}
