import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import folders from './folders';

const bookmarksApp = combineReducers({
  bookmarks,
  folders,
});

export default bookmarksApp;
