import { combineReducers } from 'redux';
import bookmarks from './bookmarks';
import folders from './folders';
import active from './active';

const bookmarksApp = combineReducers({
  bookmarks,
  folders,
  active,
});

export default bookmarksApp;
