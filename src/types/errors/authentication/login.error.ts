import { IHTTPError } from '../http.error';

export interface ILoginError extends IHTTPError {
  message: string;
}
