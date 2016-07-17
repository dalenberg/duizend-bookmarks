import { fetchBookmarks } from './bookmarks';

// Constants
export const REQUEST_FOLDERS = 'REQUEST_FOLDERS';
export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';
export const SET_CURRENT_FOLDER = 'SET_CURRENT_FOLDER';

// Actions
const requestFolders = (parentId) => ({
  type: REQUEST_FOLDERS,
  parentId,
});

const receiveFolders = (parentId, folders) => ({
  type: RECEIVE_FOLDERS,
  parentId,
  folders,
});

export const setCurrentFolder = (folderId) => ({
  type: SET_CURRENT_FOLDER,
  folderId,
});

export const changeCurrentFolder = (folderId) => (dispatch) => {
  dispatch(setCurrentFolder(folderId));
  dispatch(fetchBookmarks());
};


// Function
export const fetchFolders = (parentId) => (dispatch) => {
  // Request folders
  dispatch(requestFolders(parentId));

  // Gather all folders in this variable
  const allFolders = [];

  // Iterate over all folders
  const filterAllFolders = (folders) => {
    folders
      .filter(item => item.url === undefined)
      .map(folder => {
        // Push all folders to variable
        allFolders.push({
          id: folder.id,
          title: folder.title,
        });

        // Do it again for all children folders
        filterAllFolders(folder.children);

        return true;
      });
  };

  // Get folders and dispatch 'em
  chrome.bookmarks.getSubTree(parentId, results => {
    filterAllFolders(results);
    dispatch(receiveFolders(parentId, allFolders));
  });
};
