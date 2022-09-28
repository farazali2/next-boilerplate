import { ILoginDTO } from '@app/types/dto/authentication/login.dto';
import fetcher, { Response } from '@app/utils/fetcher';

/**
 * Method to get the universities
 * list
 * @returns Promise<Response>
 */
export const LoginRequest = async (dto: ILoginDTO): Promise<Response> => {
  return fetcher.post('/login', dto);
};
