import { appendToObject, move } from './helpers';
import { constants } from './actions';

export const initialState = {
  bookmarks: {},
  folders: {},
  loading: false,
  activeFolders: [],
};

const bookmarks = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_FOLDERS:
    case constants.REQUEST_BOOKMARKS:
      return Object.assign({}, state, {
        loading: true,
      });

    case constants.RECEIVE_BOOKMARKS:
      return Object.assign({}, state, {
        bookmarks: appendToObject(state.bookmarks, action.bookmarks),
        loading: false,
      });

    case constants.RECEIVE_FOLDERS:
      return Object.assign({}, state, {
        folders: appendToObject(state.folders, action.folders),
        loading: false,
      });

    case constants.ADD_ACTIVE_FOLDER:
      return Object.assign({}, state, {
        activeFolders: [
          ...state.activeFolders,
          action.folder,
        ],
      });

    case constants.REMOVE_ACTIVE_FOLDER: {
      return Object.assign({}, state, {
        activeFolders: state.activeFolders.filter(folder => folder.id !== action.id),
      });
    }

    case constants.MOVE_ACTIVE_FOLDERS: {
      return Object.assign({}, state, {
        activeFolders: move(state.activeFolders, action.from, action.to),
      });
    }

    default:
      return state;
  }
};

export default bookmarks;
