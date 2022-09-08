import fetcher, { Response } from '@app/utils/fetcher';

/**
 * Method to get the universities
 * list
 * @returns Promise<Response>
 */
export const fetchUniversities = async (): Promise<Response> => {
  return fetcher.get(
    'http://universities.hipolabs.com/search?country=United+States'
  );
};
