/**
 * Method to remove trailing slash
 * from string
 * @param url
 * @returns string
 */
export const removeTrailingSlash = (url: string): string => {
  return url.replace(/\/+$/, '');
};

/**
 * Method to create the api url
 * with base and suffix
 * @param baseURL
 * @param suffix
 * @returns string
 */
export const createApiUrl = (baseURL: string, suffix: string): string => {
  const base = removeTrailingSlash(baseURL);
  const _suffix = removeTrailingSlash(suffix);
  return `${base}\\${_suffix}`;
};
