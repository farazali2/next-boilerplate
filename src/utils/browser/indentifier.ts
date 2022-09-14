import { NextPageContext } from 'next';

/**
 * Exporting constacts object for supported
 * browsers
 */
export const browsers = {
  chrome: 'chrome',
  firefox: 'firefox',
  safari: 'safari',
  explorer: 'explorer',
  edge: 'edge',
  oprea: 'oprea',
};

/**
 * Method to check if the browser
 * is opera
 * Opera 8.0+
 * @returns boolean
 */
export const isOpera = () => {
  return (
    (navigator.userAgent.indexOf('Opera') ||
      navigator.userAgent.indexOf('OPR')) !== -1
  );
};

/**
 * Method to check if the browser
 * is firefox
 * Firefox 1.0+
 * @returns boolean
 */
export const isFirefox = (): boolean => {
  return navigator.userAgent.indexOf('Firefox') !== -1;
};

/**
 * Method to check if the browser
 * is safari
 * Safari 3.0+
 * @returns boolean
 */
export const isSafari = (): boolean => {
  return navigator.userAgent.indexOf('Safari') !== -1;
};

/**
 * Method to check if the browser
 * is internet explorer
 * Internet Explorer 6-11
 * @returns boolean
 */
export const isIE = (): boolean => {
  return (
    navigator.userAgent.indexOf('MSIE') != -1 ||
    !!document.DOCUMENT_NODE == true
  );
};

/**
 * Method to check if the browser
 * is microsoft edge
 * Internet Explorer 6-11
 * @returns boolean
 */
export const isEdge = (): boolean => {
  return navigator.userAgent.indexOf('Edg') !== -1;
};

/**
 * Method to check if the browser
 * is google chrome
 * Chrome 1 - 71
 * @returns boolean
 */
export const isChrome = (): boolean => {
  return navigator.userAgent.indexOf('Chrome') !== -1;
};

/**
 * Method to check if the browser
 * has blink engine
 * @returns boolean
 */
export const isBlink = (): boolean => {
  return (isChrome || isOpera) && !!window.CSS;
};

/**
 * Method to get the current browser
 * name
 * @returns string
 */
export const currentBrowser = (): string => {
  // if (isChrome()) return browsers.chrome;
  // if (isFirefox()) return browsers.firefox;
  // if (isIE()) return browsers.explorer;
  // if (isEdge()) return browsers.edge;
  // if (isOpera()) return browsers.oprea;
  // if (isSafari()) return browsers.safari;
  return '';
};
