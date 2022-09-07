import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
