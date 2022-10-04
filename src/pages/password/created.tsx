import { NextPage } from 'next';
import LeftFixedImage from '@app/components/leftfixedimage';
import Link from 'next/link';
const CreatedPassword: NextPage = () => {
  return (
    <>
      <LeftFixedImage bgImage='/images/created-bg.png' />
      <section className='loginSection password-created-sec'>
        <div className='container-fluid p-0 h-100'>
          <div className='row m-0 h-100 align-items-center justify-content-center'>
            <div className='col-12 col-md-6 col-lg-5 col-xl-4'>
              <div className='white-box'>
                <h4>password created</h4>
                <hr className='hr-line primary-line' />
                <p className='mb-0'>Login ID:</p>
                <p>
                  <b>abdullah.j@gmail.com</b>
                </p>
                <hr className='line-row' />
                <p className='mb-0'>Password:</p>
                <p>
                  <b>iLov3MyPiano</b>
                </p>
                <Link href='/register'>
                  <a className='btn btn-primary btn-block'>
                    <span>continue</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatedPassword;
