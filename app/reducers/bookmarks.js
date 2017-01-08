const initialState = {
  bookmarks: [],
  folders: [],
  loading: false,
  activeFolders: [],
};

const bookmarks = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_BOOKMARKS':
      return Object.assign({}, state, {
        loading: true,
      });

    case 'RECEIVE_BOOKMARKS':
      return Object.assign({}, state, {
        bookmarks: state.bookmarks.concat(action.bookmarks),
        loading: false,
      });

    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        folders: state.folders.concat(action.folders),
        loading: false,
      });

    case 'ADD_ACTIVE_FOLDER':
      return Object.assign({}, state, {
        activeFolders: state.activeFolders.concat(action.id)
      });

    default:
      return state;
  }
};

export default bookmarks;
