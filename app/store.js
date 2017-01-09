import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';
import bookmarks from './reducers/bookmarks';
import { initialState } from './reducers/bookmarks';

const logger = createLogger();
const store = createStore(bookmarks, initialState, compose(
  applyMiddleware(thunk),
  persistState(),
));

export default store;
