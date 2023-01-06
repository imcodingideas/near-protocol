import { PropsWithChildren } from 'react'
import { Card } from '../Card'
import styles from './AsideCard.module.css'

export interface AsideCardProps {
    title: string;
}

export const AsideCard = ({ children, title }: PropsWithChildren<AsideCardProps>) => {
    return (
        <Card>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </Card>
    )
}
