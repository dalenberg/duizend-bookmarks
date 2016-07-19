import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import bookmarksApp from '../reducers';

const store = createStore(bookmarksApp, compose(
  applyMiddleware(thunkMiddleware),
  persistState(),
));

export default store;
