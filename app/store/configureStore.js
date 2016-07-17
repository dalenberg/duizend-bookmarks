import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import createLogger from 'redux-logger';
import bookmarksApp from '../reducers';

const loggerMiddleware = createLogger();

const store = createStore(bookmarksApp, compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ), persistState()
));

export default store;
