import { PropsWithChildren } from 'react';
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/banner/Banner';
import { css } from "../utils";
import styles from './PageLayout.module.css';

interface PageLayoutProps { }

export const PageLayout = ({
  children,
}: PropsWithChildren<PageLayoutProps>) => (
  <>
    <Navbar />
    <main className={css(styles.main, styles.grid)}>
      <header className={styles.header}>
        <Banner />
      </header>
      <section className={styles.main}>{children}</section>
      <aside className={styles.sidebar}><h3>Aside</h3></aside>
    </main>
  </>
);
