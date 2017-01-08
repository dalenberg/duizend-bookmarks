import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBookmarks } from '../actions/bookmarks';
import BookmarkList from '../components/BookmarkList';

const getBookmarksByFolder = ({
  folders,
  bookmarks,
}, {
  folder,
}) => {
  const currentFolder = folders.find(f => f.id === folder.id)

  if (!currentFolder) {
    return [];
  }

  return currentFolder.bookmarks.map(bookmark => {
    return bookmarks.find(b => b.id === bookmark);
  });
};

class Folder extends Component {
  componentDidMount() {
    this.props.getBookmarks(this.props.folder.id);
  }

  render() {
    return (
      <BookmarkList
        title={this.props.folder.title}
        bookmarks={this.props.bookmarks}
      />
    );
  }
};

export default connect(
  (state, props) => ({
    bookmarks: getBookmarksByFolder(state, props),
  }),
  (dispatch) => ({
    getBookmarks: (id) => dispatch(fetchBookmarks(id)),
  }),
)(Folder);
