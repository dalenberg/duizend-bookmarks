import BookmarkService from '../services/bookmarks';

const bookmarkService = new BookmarkService();

// Constants
export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

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

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveData = (folders) => ({
  type: RECEIVE_DATA,
  folders,
});

// Function
export const fetchBookmarks = (id) => (dispatch) => {
  dispatch(requestBookmarks(id));

  bookmarkService.getBookmarks(id, (bookmarks) => {
    dispatch(receiveBookmarks(id, bookmarks));
  });
};

export const fetchFolders = () => (dispatch) => {
  dispatch(requestData());

  bookmarkService.getFolders((folders) => {
    dispatch(receiveData(folders));
  });
}
