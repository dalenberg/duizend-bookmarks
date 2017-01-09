import BookmarkService from '../services/bookmarks';

// Constants
export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';

export const REQUEST_FOLDERS = 'REQUEST_FOLDERS';
export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';

export const ADD_ACTIVE_FOLDER = 'ADD_ACTIVE_FOLDER';
export const REMOVE_ACTIVE_FOLDER = 'REMOVE_ACTIVE_FOLDER';

// Actions
const requestBookmarks = (id) => ({
  type: REQUEST_BOOKMARKS,
  id,
});

const receiveBookmarks = (id, bookmarks) => ({
  type: RECEIVE_BOOKMARKS,
  id,
  bookmarks,
});

const requestFolders = () => ({
  type: REQUEST_FOLDERS,
});

const receiveFolders = (folders) => ({
  type: RECEIVE_FOLDERS,
  folders,
});

const newActiveFolder = (folder) => ({
  type: ADD_ACTIVE_FOLDER,
  folder,
});

export const deleteActiveBookmark = (id) => ({
  type: REMOVE_ACTIVE_FOLDER,
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
