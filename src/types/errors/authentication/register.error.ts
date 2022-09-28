import { IHTTPError } from '../http.error';

export interface IRegisterError extends IHTTPError {
  message: string;
}
