import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import bookmarks from './reducers/bookmarks';

const logger = createLogger();
const preloadedState = {
  bookmarks: [],
  folders: [],
  loading: false,
  activeFolders: [{
    id: '480',
    title: 'Reading List',
  }, {
    id: '482',
    title: 'Watch List',
  }, {
    id: '1225',
    title: 'JavaScript',
  }],
};

const store = createStore(bookmarks, preloadedState, compose(
  applyMiddleware(thunk, logger),
));

export default store;
