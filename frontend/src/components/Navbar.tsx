import { Button } from './Button';
import { useRouter } from '@tanstack/react-router';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const router = useRouter();

  const isHome = !!router.matchRoute({
    to: '/'
  })

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationContent}>
        {isHome ? (
          <Button onClick={async () => {
            await router.navigate({
              to: '/questions/create',
            });
          }}>Ask a question</Button>
        ) : (
          <Button onClick={async () => {
            await router.navigate({
              to: '/',
            });
          }}>Home</Button>
        )}
      </div>
    </nav>
  )
};
