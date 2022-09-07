/**
 * Translation helper function to check
 * if provided language key is RTL
 * @param key
 * @returns
 */
export const isRTL = (key: string): boolean => {
  const RTLs = ['ar'];
  return RTLs.includes(key);
};
