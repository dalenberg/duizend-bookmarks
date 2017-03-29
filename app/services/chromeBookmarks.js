import ChromeBookmarkFactory from './chromeBookmarkFactory';

export default class ChromeBookmarkService {
  constructor() {
    this.bookmarkFactory = new ChromeBookmarkFactory();
  }

  getFolders(callback) {
    chrome.bookmarks.getTree((results) => {
      callback(this.bookmarkFactory.getFolders(results));
    });
  }

  getBookmarks(folder, callback) {
    chrome.bookmarks.getChildren(folder, (results) => {
      callback(this.bookmarkFactory.getBookmarks(results));
    });
  }
}
