import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Metadata from '../layouts/head';
import { AppState } from '@app/store/types';
import { setDark } from '@app/store/slices/app.slice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/store';
import { getUniversities } from '@app/store/actions/universities.actions';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'home'])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'home']);
  
  const dispatch = useAppDispatch();
  const dark = useAppSelector((state: AppState) => state.app.dark);

  useEffect(() => {
    dispatch(getUniversities());
  }, [])

  return (
    <>
      <Metadata
        title={t('common:app_name')}
        description='This is home page'
        keywords='Collective, Traffic, GreenLightLabs'
      />
      <h1>{t('home:title')}</h1>
      <p>{t('home:description')}</p>
      <h5>Dark: {dark ? 'Yes' : 'No'}</h5>
      <button onClick={() => dispatch(setDark(!dark))}>Change State</button>
    </>
  );
};

export default Home;
