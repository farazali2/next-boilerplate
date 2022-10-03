import { NextPage } from 'next';
import FormHeading from '@app/components/typography/form-heading';
import Field from '@app/components/form/field';
import Button from '@app/components/form/button';
import AuthLayout from '@app/layouts/auth';
import { IAuthInfographic } from '@app/types/authinfographic.type';
import Checkbox from '@app/components/form/checkbox';
import Select, { IOption } from '@app/components/form/select';
import { Country, ICountry, City, ICity } from 'country-state-city';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { RegisterSchema, RegisterValues } from '@app/schemas/register.schema';

const infographic: IAuthInfographic = {
  position: 'right',
  icon: 'icon-profile',
  heading: 'Start<br/> Your journey signup',
  description:
    'Enter your details and join this Team Collective learning experience',
  link: '/login',
  linkText: 'Sign in',
};

const Register: NextPage = () => {
  const [cities, setCities] = useState<Array<ICity>>([]);
  const countries: Array<ICountry> = Country.getAllCountries();

  const registerForm = useFormik<RegisterValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      country: {
        label: 'United Arab Emirates',
        value: 'AE',
      },
      city: {
        label: '',
        value: '',
      },
      email: '',
      terms: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (registerForm.values.country.value) {
      setCities(
        City.getCitiesOfCountry(
          registerForm.values.country.value
        ) as Array<ICity>
      );
    }
  }, [registerForm.values.country]);

  const onCountryChange = (option: IOption) => {
    registerForm.setFieldValue('country', option);
    setCities(City.getCitiesOfCountry(option.value) as Array<ICity>);
  };

  const onCityChange = (option: IOption) => {
    registerForm.setFieldValue('city', option);
  };

  return (
    <>
      <AuthLayout bgImage='/images/register-bg.jpg' infographic={infographic}>
        <form
          id='login'
          autoComplete='off'
          onSubmit={registerForm.handleSubmit}
        >
          <div className='row'>
            <div className='col-12'>
              <FormHeading>Register to Team Collective</FormHeading>
            </div>
            <div className='col-12 col-md-6'>
              <Field
                label='First Name'
                type='text'
                name='firstName'
                placeholder='Enter the First Name'
                required={true}
                value={registerForm.values.firstName}
                error={registerForm.errors.firstName}
                onChange={registerForm.handleChange}
              />
            </div>
            <div className='col-12 col-md-6'>
              <Field
                label='Last Name'
                type='text'
                name='lastName'
                placeholder='Enter the last name'
                required={true}
                value={registerForm.values.lastName}
                error={registerForm.errors.lastName}
                onChange={registerForm.handleChange}
              />
            </div>
            <div className='col-12 col-md-6'>
              <Select
                label='Country'
                name='country'
                options={countries}
                optionLabel='name'
                optionValue='isoCode'
                placeholder='Select country'
                required={true}
                onChange={(e) => onCountryChange(e as IOption)}
                defaultValue={registerForm.values.country}
                error={registerForm.errors.country as string}
              />
            </div>
            <div className='col-12 col-md-6'>
              <Select
                label='City'
                name='city'
                options={cities}
                optionLabel='name'
                optionValue='name'
                placeholder='Select city'
                isDisabled={!cities || registerForm.values.country.value === ''}
                required={true}
                onChange={(e) => onCityChange(e as IOption)}
                defaultValue={registerForm.values.city}
                error={registerForm.errors.city as string}
              />
            </div>
            <div className='col-12 col-md-6'>
              <Field
                label='E-mail'
                type='email'
                name='email'
                placeholder='Enter email address'
                required={true}
                value={registerForm.values.email}
                error={registerForm.errors.email}
                onChange={registerForm.handleChange}
              />
            </div>
            <div className='col-12 col-md-6'>
              <label htmlFor='remember_me'>&nbsp;</label>
              <Checkbox
                label='I have read and agree to the'
                value='accepted'
                name='terms'
                link='/'
                linkText='terms and conditions'
                linkClass='btn-link'
                required={true}
                checked={registerForm.values.terms}
                error={registerForm.errors.terms}
                onChange={registerForm.handleChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='form-group'>
                <Button type='submit' className='w-100 text-center'>
                  Register
                </Button>
              </div>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
