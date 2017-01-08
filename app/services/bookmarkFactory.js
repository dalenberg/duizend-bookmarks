class BookmarkFactory {
  constructor() {
    this.folders = [];
    this.bookmarks = [];
  }

  factorBookmark(bookmark) {
    return {
      id: bookmark.id,
      title: bookmark.title,
      url: bookmark.url,
    };
  }

  factorFolder(folder) {
    return {
      id: folder.id,
      title: folder.title,
      bookmarks: folder.children
        .filter(item => item.url !== undefined)
        .map(child => child.id),
    };
  }

  traverseTree(data, type) {
    data.forEach(item => {
      if (item.children) {
        if (type === 'folders') {
          this.folders.push(this.factorFolder(item));
        }
        this.traverseTree(item.children, type);
      }

      if (item.url && type === 'bookmarks') {
        this.bookmarks.push(this.factorBookmark(item));
      }
    });

    return this;
  }

  getFolders(results) {
    this.traverseTree(results, 'folders');
    return this.folders;
  }

  getBookmarks(results) {
    this.traverseTree(results, 'bookmarks');
    return this.bookmarks;
  }
}

export default BookmarkFactory;
