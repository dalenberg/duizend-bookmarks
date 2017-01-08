class BookmarkFactory {
  factorBookmarks(result) {
    return result
      .filter(item => item.url !== undefined)
      .map(bookmark => ({
        id: bookmark.id,
        title: bookmark.title,
        url: bookmark.url,
      }));
  }
}

class BookmarkService {
  constructor() {
    this.bookmarkFactory = new BookmarkFactory();
  }

  getBookmarks(folder, callback) {
    chrome.bookmarks.getChildren(folder, (results) => {
      callback(this.bookmarkFactory.factorBookmarks(results));
    });
  }
};

export default BookmarkService;
