import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Metadata from '../layouts/head';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'home'])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'home']);
  return (
    <>
      <Metadata
        title={t('common:app_name')}
        description='This is home page'
        keywords='Collective, Traffic, GreenLightLabs'
      />
      <h1>{t('home:title')}</h1>
      <p>{t('home:description')}</p>
    </>
  );
};

export default Home;
