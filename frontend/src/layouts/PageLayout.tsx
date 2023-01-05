import { PropsWithChildren } from 'react';
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';

interface PageLayoutProps { }

export const PageLayout = ({
  children,
}: PropsWithChildren<PageLayoutProps>) => (
  <div>
    <Navbar />
    <main>
      <Banner />
      {children}
      <aside>
        <h3>Aside</h3>
      </aside>
    </main>
  </div>
);
