import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getBookmarksByFolder } from '../selectors';
import { deleteActiveBookmark, fetchBookmarks } from '../actions/bookmarks';
import BookmarkList from '../components/BookmarkList';

const propTypes = {
  folder: PropTypes.object,
  bookmarks: PropTypes.array,
}

class Folder extends Component {
  componentDidMount() {
    this.props.getBookmarks(this.props.folder.id);
  }

  render() {
    return (
      <BookmarkList
        folder={this.props.folder}
        bookmarks={this.props.bookmarks}
        deleteBookmark={this.props.onDeleteBookmark}
      />
    );
  }
};

Folder.propTypes = propTypes;

export default connect(
  (state, props) => ({
    bookmarks: getBookmarksByFolder(state, props),
  }),
  (dispatch) => ({
    onDeleteBookmark: (id) => dispatch(deleteActiveBookmark(id)),
    getBookmarks: (id) => dispatch(fetchBookmarks(id)),
  }),
)(Folder);
