import { Button } from './Button';
import styles from './Navbar.module.css';

export const Navbar = () => (
  <nav className={styles.navigation}>
    <Button text="Ask a question" />
  </nav>
);
