import { appendToObject } from '../helpers';

export const initialState = {
  bookmarks: {},
  folders: {},
  loading: false,
  activeFolders: [],
};

const bookmarks = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_FOLDERS':
    case 'REQUEST_BOOKMARKS':
      return Object.assign({}, state, {
        loading: true,
      });

    case 'RECEIVE_BOOKMARKS':
      return Object.assign({}, state, {
        bookmarks: appendToObject(state.bookmarks, action.bookmarks),
        loading: false,
      });

    case 'RECEIVE_FOLDERS':
      return Object.assign({}, state, {
        folders: appendToObject(state.folders, action.folders),
        loading: false,
      });

    case 'ADD_ACTIVE_FOLDER':
      return Object.assign({}, state, {
        activeFolders: [
          ...state.activeFolders,
          action.folder,
        ],
      });

    default:
      return state;
  }
};

export default bookmarks;
