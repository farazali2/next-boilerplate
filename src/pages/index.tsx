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
  const universites = useAppSelector((state: AppState) => state.universities.list);
  const loading = useAppSelector((state: AppState) => state.universities.loading);

  useEffect(() => {
    dispatch(getUniversities());
  }, [])

  console.log(universites);

  return (
    <>
      <Metadata
        title={t('common:app_name')}
        description='This is home page'
        keywords='Collective, Traffic, GreenLightLabs'
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{t('home:title')}</h4>
            <p>{t('home:description')}</p>
          </div>
          <div className="col-12">
            <div className='d-flex align-items-center my-4 justify-content-end'>
              <h5 className='m-0 mx-3'>Dark: {dark ? 'Yes' : 'No'}</h5>
              <button onClick={() => dispatch(setDark(!dark))} className='btn btn-primary'>Change State</button>
            </div>
          </div>

          <div className='col-6 mx-auto'>
            { 
              loading ? 
                <div className='card mt-2 p-4 text-primary text-center'>
                  <div className="spinner-border mx-auto" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                  <p className='my-3'>
                    Loading universities please awit
                  </p>
                </div> : null
            }
            { 
              universites.map(
                (item, i) => (
                  <div key={i + 1} className='card mt-2 p-4'>
                    <h5 className='m-0 p-0 mb-1 text-primary'>{item.name}</h5>
                    <p className='m-0 p-0 text-muted'>{item.country+", "+item['state-province']}</p>
                    <div>
                      {
                        item.web_pages.map(
                          (domain, j) => (
                            <a href={domain} key={j}>
                              { domain }
                            </a>
                          )
                        )
                      }
                    </div>
                  </div>
                )
              ) 
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
