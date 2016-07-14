/* global __webpack_public_path__  */
/* eslint no-native-reassign: 0 camelcase: 0 */

if (process.env.NODE_ENV === 'production') {
  __webpack_public_path__ = chrome.extension.getURL('/js/');
}
