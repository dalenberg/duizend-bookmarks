import { connect } from 'react-redux';

import BookmarksList from './BookmarksList';
import { fetchBookmarks } from '../actions/bookmarks';

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks.items,
  loading: state.bookmarks.loading,
});

const mapDispatchToProps = (dispatch) => ({
  action: dispatch(fetchBookmarks()),
});

const BookmarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksList);

export default BookmarkContainer;
