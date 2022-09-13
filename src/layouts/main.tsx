import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useAppSelector } from '@app/store';
import { FC, ReactNode } from 'react';
import { AppState } from '@app/store/types';
import Metadata from '@app/layouts/head';
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const metadata = useAppSelector((state: AppState) => state.app.metadata);
  return (
    <>
      <Metadata
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
