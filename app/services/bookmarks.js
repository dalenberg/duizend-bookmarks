import BookmarkFactory from './bookmarkFactory';

class BookmarkService {
  constructor() {
    this.bookmarkFactory = new BookmarkFactory();
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

export default BookmarkService;
