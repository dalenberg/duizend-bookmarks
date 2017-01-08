import BookmarkFactory from './bookmarkFactory';

class BookmarkService {
  constructor() {
    this.bookmarkFactory = new BookmarkFactory();
  }

  getFolders(callback) {
    chrome.bookmarks.getTree((results) => {
      callback(this.bookmarkFactory.traverseTree(results).getFolders());
    });
  }

  getBookmarks(folder, callback) {
    chrome.bookmarks.getChildren(folder, (results) => {
      callback(this.bookmarkFactory.traverseTree(results).getBookmarks());
    });
  }
};

export default BookmarkService;
