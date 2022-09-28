const fetcher = {
  /**
   * Constant to define API base URLs
   */
  baseURL: 'http://localhost:5001/',

  /**
   * Constant to define API suffix if any
   */
  sufix: 'api',

  /**
   * Constant to define API default headers
   */
  headers: {
    'content-type': 'application/json',
  },
};

export default fetcher;
