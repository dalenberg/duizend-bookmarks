// Constants
export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';

// Actions
const requestBookmarks = (folderId) => ({
  type: REQUEST_BOOKMARKS,
  folderId,
});

const receiveBookmarks = (folderId, bookmarks) => ({
  type: RECEIVE_BOOKMARKS,
  folderId,
  bookmarks,
});

// Function
export const fetchBookmarks = () => (dispatch, getState) => {
  // Get folder id
  const state = getState();
  const folderId = state.active.current;

  // Dispatch loading action
  dispatch(requestBookmarks(folderId));

  // Fetch actual bookmarks and dispatch those
  chrome.bookmarks.getChildren(folderId, results => {
    const bookmarks = results
      .filter(item => item.url !== undefined)
      .map(bookmark => ({
        id: bookmark.id,
        title: bookmark.title,
        url: bookmark.url,
      }));

    dispatch(receiveBookmarks(folderId, bookmarks));
  });
};
