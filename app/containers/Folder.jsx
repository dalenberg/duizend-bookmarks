import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BookmarkList from '../components/BookmarkList';

import { getBookmarksByFolder } from '../selectors';
import { deleteActiveBookmark, fetchBookmarks } from '../actions';

const propTypes = {
  folder: PropTypes.object,
  bookmarks: PropTypes.array,
  deleteBookmark: PropTypes.func,
  getBookmarks: PropTypes.func,
  onDeleteBookmark: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  bookmarks: getBookmarksByFolder(state, props),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteBookmark: (id) => dispatch(deleteActiveBookmark(id)),
  getBookmarks: (id) => dispatch(fetchBookmarks(id)),
});

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
}

Folder.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Folder);
