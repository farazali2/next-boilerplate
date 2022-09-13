import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AppState } from '@app/store/types';
import { setDark, setMetadata } from '@app/store/slices/app.slice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/store';
import { getUniversities } from '@app/store/actions/universities.actions';
import useAppTranslation from '@app/hooks/useAppTranslation';
import Animate from '@app/components/animations/animate';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'home'])),
  },
});

const Home: NextPage = () => {
  const t = useAppTranslation(['common', 'home']);
  const dispatch = useAppDispatch();

  const dark = useAppSelector((state: AppState) => state.app.dark);
  const loading = useAppSelector(
    (state: AppState) => state.universities.loading
  );
  const universites = useAppSelector(
    (state: AppState) => state.universities.list
  );

  useEffect(() => {
    dispatch(getUniversities());
  }, []);

  dispatch(setMetadata({ title: t('common:app_name') }));

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Animate type='fadeInUp' delay={500}>
              <h2>{t('home:title')}</h2>
            </Animate>
            <Animate type='fadeInUp' delay={600}>
              <p>{t('home:description')}</p>
              <p>{t('home:description')}</p>
              <p>{t('home:description')}</p>
            </Animate>
          </div>
          <div className='col-12'>
            <Animate type='fadeIn' delay={1000}>
              <div className='d-flex align-items-center my-4 justify-content-end'>
                <h5 className='m-0 mx-3'>Dark: {dark ? 'Yes' : 'No'}</h5>
                <button
                  onClick={() => dispatch(setDark(!dark))}
                  className='btn btn-primary'
                >
                  Change State
                </button>
              </div>
            </Animate>
          </div>

          <div className='col-12 mb-5'>
            <Animate type='fadeInUp' delay={700}>
              <h2>About</h2>
            </Animate>
            <Animate type='fadeInUp' delay={800}>
              <p>{t('home:description')}</p>
              <p>{t('home:description')}</p>
              <p>{t('home:description')}</p>
            </Animate>
          </div>
          <div className='col-6 mx-auto'>
            {loading ? (
              <div className='card mt-2 p-4 text-primary text-center'>
                <div className='spinner-border mx-auto' role='status'>
                  <span className='visually-hidden'></span>
                </div>
                <p className='my-3'>Loading universities please awit</p>
              </div>
            ) : null}
            {universites.slice(0, 5).map((item, i) => (
              <Animate type='fadeInUp' delay={200 * (i + 1)} key={i + 1}>
                <div className='card mt-2 p-4'>
                  <h5 className='m-0 p-0 mb-1 text-primary'>{item.name}</h5>
                  <p className='m-0 p-0 text-muted'>
                    {item.country + ', ' + item['state-province']}
                  </p>
                  <div>
                    {item.web_pages.map((domain, j) => (
                      <a href={domain} key={j}>
                        {domain}
                      </a>
                    ))}
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
