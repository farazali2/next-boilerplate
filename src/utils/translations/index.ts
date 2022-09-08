import locales from '@app/config/locales';

/**
 * Translation helper method to check
 * if provided language key is RTL
 * @param key
 * @returns boolean
 */
 export const isRTL = (key: string): boolean => locales.RTLs.includes(key);
