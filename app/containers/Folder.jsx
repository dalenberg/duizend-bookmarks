import React, { Component } from 'react';
import BookmarkList from '../components/BookmarkList';
import BookmarkService from '../services/bookmarks';

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

  render() {
    return (
      <BookmarkList
        title={this.props.folder.title}
        bookmarks={this.state.bookmarks}
      />
    );
  }
};

export default Folder;
