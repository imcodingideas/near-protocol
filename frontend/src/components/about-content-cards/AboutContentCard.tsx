import { ReactNode } from 'react'
import styles from './AboutContentCard.module.css';

export interface AboutContentCardProps {
    icon: ReactNode;
    text: string;
}


export const AboutContentCard = ({ icon, text }: AboutContentCardProps) => {
    return (
        <div className={styles.item}>
            {icon}
            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}
