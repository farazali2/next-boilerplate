import { builder } from '@app/utils/validation/schema';

//Validation rules
const fields = {
  email: builder.string().required(),
  password: builder.string().required(),
};

//Creating valiation schema
export const LoginSchema = builder.object().shape(fields);
