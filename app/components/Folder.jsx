import React, { Component } from 'react';
import Bookmark from './Bookmark';
import BookmarkService from '../services/bookmarks';

const styles = {
  bookmarksList: {
    padding: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    padding: 20,
    color: '#fff',
  },
  title: {
    margin: 0,
    padding: 0,
    color: '#fff',
    fontWeight: 300,
    fontSize: 20,
  },
};


class Folder extends Component {
  constructor() {
    super();

    this.bookmarkService = new BookmarkService();
    this.state = {
      bookmarks: [],
    };
  }

  componentDidMount() {
    this.bookmarkService.getBookmarks(this.props.folder.id, (bookmarks) => {
      this.setState({
        bookmarks,
      });
    });
  }

  renderBookmark(bookmark) {
    return <Bookmark key={bookmark.id} {...bookmark} />;
  }

  render() {    
    return (
      <section>
        <div style={styles.header}>
          <h1 style={styles.title}>{this.props.folder.title}</h1>
        </div>
        <div style={styles.bookmarksList}>
          {this.state.bookmarks.map(this.renderBookmark)}
        </div>
      </section>
    );
  }
};

export default Folder;
