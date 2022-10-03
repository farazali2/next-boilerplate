import { NextPage } from 'next';
import Link from 'next/link';
import FormHeading from '@app/components/typography/form-heading';
import Field from '@app/components/form/field';
import Button from '@app/components/form/button';
import Checkbox from '@app/components/form/checkbox';
import AuthLayout from '@app/layouts/auth';
import { IAuthInfographic } from '@app/types/authinfographic.type';
import Anchor from '@app/components/button';
import { LoginSchema } from '@app/schemas/login.schema';
import { ILoginDTO } from '@app/types/dto/authentication/login.dto';
import { useFormik } from 'formik';
import { LoginAction } from '@app/store/actions/auth.actions';
import { useAppDispatch } from '@app/store';
import { useAppSelector } from '@app/store';
import { useEffect } from 'react';

const infographic: IAuthInfographic = {
  position: 'left',
  icon: 'icon-profile-02',
  heading: 'Start<br/> Your journey today',
  description:
    'Enter your details and join this Team Collective learning experience',
  link: '/register',
  linkText: 'Register',
};

const Login: NextPage = () => {
  const loginDTO: ILoginDTO = useAppSelector((state) => state.login.dto);
  const isLoading: boolean = useAppSelector((state) => state.login.loading);
  const errors: Array<string> = useAppSelector((state) => state.login.errors);
  const dispatch = useAppDispatch();

  const loginForm = useFormik<ILoginDTO>({
    initialValues: loginDTO,
    validationSchema: LoginSchema,
    onSubmit: async (values: ILoginDTO) => {
      dispatch(LoginAction(values));
    },
  });

  useEffect(() => {
    loginForm.setFieldError('email', errors[errors.length]);
  }, [errors]);

  return (
    <>
      <AuthLayout bgImage='/images/bg-login.jpg' infographic={infographic}>
        <form id='login' autoComplete='off' onSubmit={loginForm.handleSubmit}>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6'>
              <FormHeading>Login to Team Collective</FormHeading>
              <Field
                label='E-mail'
                type='email'
                name='email'
                placeholder='Enter email address'
                required={true}
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                error={loginForm.errors.email as string}
              />
              <Field
                label='Password'
                type='password'
                name='password'
                placeholder='Must be at least 8 characters'
                required={true}
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                error={loginForm.errors.password as string}
              />
              <div className='form-group'>
                <div className='d-flex justify-content-between align-items-center'>
                  <Checkbox
                    label='Remember me'
                    value='remember'
                    name='remember_me'
                  />
                  <Link href={'/'}>
                    <a className='btn-link'>Forgot Password?</a>
                  </Link>
                </div>
              </div>
              <div className='form-group'>
                <Button
                  type='submit'
                  className='w-100 text-center'
                  loading={isLoading}
                >
                  SIGN IN
                </Button>
              </div>
              <div className='form-group d-block d-md-none'>
                <Anchor
                  link='/register'
                  btnText='Register'
                  btnClass='btn btn-secondary'
                />
              </div>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default Login;
