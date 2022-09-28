import * as builder from 'yup';

//Schema fields
const fields = {
  email: builder.string().required(),
  password: builder.string().required(),
};

//Creating yup schema
export const LoginSchema = builder.object().shape(fields);
