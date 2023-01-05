import { BannerContent } from './components/BannerContent'
import styles from './Banner.module.css';

export const Banner = () => (
  <div className={styles.bannerContainer}>
    <BannerContent />
  </div>
);
