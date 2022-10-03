import { NextPage } from 'next';
import FormHeading from '@app/components/typography/form-heading';
import Field from '@app/components/form/field';
import Button from '@app/components/form/button';
import AuthLayout from '@app/layouts/auth';

const Forgot: NextPage = () => {
  return (
    <>
      <AuthLayout
        bgImage='/images/bg-forgot-password.jpg'
        position='left'
        sidebar={false}
      >
        <form id='login' autoComplete='off'>
          <div className='row'>
            <div className='col-12 col-md-8 col-lg-9 offset-md-2 offset-lg-1'>
              <FormHeading>Forgot Your Password?</FormHeading>
              <p>
                Don`t worry. Resetting your password is easy, just tell us the
                email you registered with Team Collective.
              </p>
            </div>
            <div className='col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-1'>
              <Field
                label='E-mail address'
                type='email'
                name='email'
                placeholder='abdullah@email.com'
              />
              <div className='form-group'>
                <Button type='button' className='w-100 text-center'>
                  Send me link
                </Button>
              </div>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default Forgot;
