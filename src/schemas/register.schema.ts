import { IOption } from '@app/components/form/select';
import { builder } from '@app/utils/validation/schema';

//Form values
export interface RegisterValues {
  firstName: string;
  lastName: string;
  country: IOption;
  city: IOption;
  email: string;
  terms: boolean;
}

//Validation rules
const fields = {
  firstName: builder.string().required(),
  lastName: builder.string().required(),
  country: builder.string().required(),
  city: builder.string().required(),
  email: builder.string().required(),
  terms: builder.boolean().oneOf([true]),
};

//Creating valiation schema
export const RegisterSchema = builder.object().shape(fields);
