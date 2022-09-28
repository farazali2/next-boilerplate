import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginRequest } from '@app/services/auth';
import { ILoginDTO } from '@app/types/dto/authentication/login.dto';
import { IFetchError } from '@app/utils/fetcher/error';
import { ILoginError } from '@app/types/errors/authentication/login.error';

export const LoginAction = createAsyncThunk<
  { Token: string },
  ILoginDTO,
  { rejectValue: ILoginError }
>(
  //Action type
  'auth/login',
  //Callback function
  async (data: ILoginDTO, { rejectWithValue }) => {
    try {
      //Making an api call
      const response = await LoginRequest(data);
      //Return response json
      return response.data;
    } catch (e) {
      //Parsing error as fetch error
      const error = e as IFetchError<ILoginError>;
      //If response not exist
      if (!error.response) {
        throw error;
      }
      //Return error response data
      return rejectWithValue(error.response?.data);
    }
  }
);
