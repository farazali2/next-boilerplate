import '../styles/style.scss';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default appWithTranslation(MyApp);
