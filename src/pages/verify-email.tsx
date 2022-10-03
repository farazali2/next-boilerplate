import { NextPage } from 'next';
import Link from 'next/link';
import FormHeading from '@app/components/typography/form-heading';
import AuthLayout from '@app/layouts/auth';

const VerifyEmail: NextPage = () => {
  return (
    <>
      <AuthLayout
        bgImage='/images/bg-verify.jpg'
        position='left'
        sidebar={false}
      >
        <form id='login' autoComplete='off'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-11 col-xl-10'>
              <FormHeading>Thank you for signing up</FormHeading>
              <h2>Verify your email address</h2>
              <p>
                To continue using Team Collective, Please click on the link in
                the verification email sent to your email.
              </p>
            </div>
            <div className='col-12 col-md-10 col-lg-11 col-xl-10'>
              <div className='verify-help-box'>
                <h6 className='text-info'>NEED HELP?</h6>
                <div className='verify-help-links'>
                  <div className='verify-help-div resend-help-div'>
                    <p className='mb-0 fw-700 text-grey'>
                      Didn’t receive the email?
                      <br />
                      <Link href='/login'>
                        <a
                          id='resendVerificationEmail'
                          className='btn-link-2 text-grey'
                        >
                          Resend the verification email
                        </a>
                      </Link>
                    </p>
                    <p className='resend-timer-msg'>
                      Please wait for{' '}
                      <span className='custom_counter'>15 seconds</span>
                    </p>
                  </div>
                  <div className='verify-help-div'>
                    <p className='mb-0 fw-700 text-grey'>
                      Don’t have access to your email?
                      <br />
                      <Link href='/register'>
                        <a
                          className='btn-link-2 fw-400 text-grey'
                        >
                          Change your contact email address
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default VerifyEmail;
