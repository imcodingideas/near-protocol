import { PropsWithChildren } from 'react';
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/banner/Banner';
import { AsideCard } from '../components/aside-card/AsideCard';
import { PeopleGroupIcon } from '../components/assets/PeopleGroupIcon';
import { ChatBubbleIcon } from '../components/assets/ChatBubbleIcon';
import { UpVoteIcon } from '../components/assets/UpVoteIcon';
import { GeneraringTokensIcon } from '../components/assets/GeneraringTokensIcon';
import { AboutContentCards } from '../components/about-content-cards/AboutContentCards';
import { css } from "../utils";
import styles from './PageLayout.module.css';

interface PageLayoutProps { }

const aboutContent = [
  {
    icon: (
      <PeopleGroupIcon />
    ),
    text: '246 Experts',
  },
  {
    icon: (
      <ChatBubbleIcon />
    ),
    text: '100k Questions and Answers',
  },
  {
    icon: (
      <UpVoteIcon />
    ),
    text: '50k Upvotes',
  },
  {
    icon: (
      <GeneraringTokensIcon />
    ),
    text: '145 Tokens Awarded',
  },
]

export const PageLayout = ({
  children,
}: PropsWithChildren<PageLayoutProps>) => (
  <>
    <Navbar />
    <main className={css(styles.main, styles.grid)}>
      <header className={styles.header}>
        <Banner />
      </header>
      <section className={styles.content}>{children}</section>
      <aside className={styles.sidebar}>
        <AsideCard title='About'>
          <AboutContentCards content={aboutContent} />
        </AsideCard>
      </aside>
    </main>
  </>
);
