import { PropsWithChildren } from 'react';
import { Logo } from './Logo';
import styles from "./BannerContent.module.css";

export interface BannerContentProps { }

export const BannerContent = (props: PropsWithChildren<BannerContentProps>) => {
    return (
        <div className={styles.bannerContent}>
            <Logo />
            <h1>
                Near Protocol
            </h1>
        </div>
    )
}