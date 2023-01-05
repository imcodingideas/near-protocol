import { Button } from './Button';
import styles from './Navbar.module.css';

export const Navbar = () => (
  <nav className={styles.navigation}>
    <div className={styles.navigationContent}>
      <Button text="Ask a question" />
    </div>
  </nav>
);
