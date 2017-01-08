import { asArray } from '../helpers';

export const getActiveFolders = (state) => state.activeFolders;
export const getAllFolders = (state) => asArray(state.folders);

export const getBookmarksByFolder = ({
  folders,
  bookmarks,
}, {
  folder,
}) => {
  const currentFolder = folders[folder.id];

  if (!currentFolder) {
    return {};
  }

  return currentFolder.bookmarks.map(bookmark => bookmarks[bookmark]);
};
