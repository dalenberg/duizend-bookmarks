import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import bookmarksApp from '../reducers';

const store = createStore(bookmarksApp, compose(
  applyMiddleware(thunkMiddleware),
));

export default store;
