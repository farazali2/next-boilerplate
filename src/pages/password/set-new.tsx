import { NextPage } from 'next';
import FormHeading from '@app/components/typography/form-heading';
import Field from '@app/components/form/field';
import Button from '@app/components/form/button';
import AuthLayout from '@app/layouts/auth';

const SetNew: NextPage = () => {
  return (
    <>
      <AuthLayout
        bgImage='/images/bg-setpassword-new.jpg'
        position='left'
        sidebar={false}
      >
        <form id='login' autoComplete='off'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6'>
              <FormHeading>Set New Password</FormHeading>
              <p className='mb-0'>Sign up as</p>
              <p>
                <b>abdullah.j@gmail.com</b>
              </p>
              <Field
                label='Password'
                type='password'
                name='password'
                placeholder='Must be at least 8 characters'
                showStrengthMeter={true}
              />
              <Field
                label='Confirm Password'
                type='password'
                name='password'
                placeholder='Must be at least 8 characters'
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

export default SetNew;
