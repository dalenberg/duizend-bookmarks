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
      bookmarks: folder.children.map(child => child.id),
    };
  }

  traverseTree(data) {
    data.forEach(item => {
      if (item.children) {
        this.folders.push(this.factorFolder(item));
        this.traverseTree(item.children);
      } else {
        this.bookmarks.push(this.factorBookmark(item));
      }
    });

    return this;
  }

  getData() {
    return {
      folders: this.folders,
      bookmarks: this.bookmarks,
    }
  }

  getFolders() {
    return this.folders;
  }

  getBookmarks() {
    return this.bookmarks;
  }
}

export default BookmarkFactory;
