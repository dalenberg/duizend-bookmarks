import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import bookmarks, { initialState } from './reducer';

const store = createStore(bookmarks, initialState, compose(
  applyMiddleware(thunk),
  persistState()
));

export default store;
