import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getBookmarksByFolder } from '../selectors';
import { fetchBookmarks } from '../actions/bookmarks';
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
        title={this.props.folder.title}
        bookmarks={this.props.bookmarks}
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
    getBookmarks: (id) => dispatch(fetchBookmarks(id)),
  }),
)(Folder);
