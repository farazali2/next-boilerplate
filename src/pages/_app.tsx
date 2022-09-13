import 'animate.css';
import '../styles/style.scss';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/main';
import { wrapper } from '../store';
import { useRouter } from 'next/router';
import { isRTL } from '@app/utils/translations';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const RTL = isRTL(router.locale as string);
  return (
    <div dir={RTL ? 'rtl' : 'ltr'} className={''}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
};

export default wrapper.withRedux(appWithTranslation(MyApp));
