/* @flow */

export type IBookmark = {
  id: number,
  title: string,
  url: string,
};

export type IFolder = {
  id: number,
  title: string,
  bookmarks: [],
};

export type IState = {
  activeFolders: Array<Folder>,
  bookmarks: Array<Bookmark>,
  folders: Array<Folder>,
  loading: boolean,
};
