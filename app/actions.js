import BookmarkService from './services/bookmarks';

// Constants
export const constants = {
  REQUEST_BOOKMARKS: 'REQUEST_BOOKMARKS',
  RECEIVE_BOOKMARKS: 'RECEIVE_BOOKMARKS',
  REQUEST_FOLDERS: 'REQUEST_FOLDERS',
  RECEIVE_FOLDERS: 'RECEIVE_FOLDERS',
  ADD_ACTIVE_FOLDER: 'ADD_ACTIVE_FOLDER',
  REMOVE_ACTIVE_FOLDER: 'REMOVE_ACTIVE_FOLDER',
};


// Actions
const requestBookmarks = (id) => ({
  type: constants.REQUEST_BOOKMARKS,
  id,
});

const receiveBookmarks = (id, bookmarks) => ({
  type: constants.RECEIVE_BOOKMARKS,
  id,
  bookmarks,
});

const requestFolders = () => ({
  type: constants.REQUEST_FOLDERS,
});

const receiveFolders = (folders) => ({
  type: constants.RECEIVE_FOLDERS,
  folders,
});

const newActiveFolder = (folder) => ({
  type: constants.ADD_ACTIVE_FOLDER,
  folder,
});

export const deleteActiveBookmark = (id) => ({
  type: constants.REMOVE_ACTIVE_FOLDER,
  id,
});

// Function
export const fetchBookmarks = (id) => (dispatch) => {
  const bookmarkService = new BookmarkService();

  dispatch(requestBookmarks(id));

  bookmarkService.getBookmarks(id, (bookmarks) => {
    dispatch(receiveBookmarks(id, bookmarks));
  });
};

export const fetchFolders = () => (dispatch) => {
  const bookmarkService = new BookmarkService();

  dispatch(requestFolders());

  bookmarkService.getFolders((folders) => {
    dispatch(receiveFolders(folders));
  });
};

export const addActiveFolder = (id) => (dispatch, store) => {
  const state = store();
  const folder = state.folders[id];

  dispatch(newActiveFolder(folder));
};
