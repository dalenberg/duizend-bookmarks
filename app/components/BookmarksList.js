import React, { PropTypes } from 'react';
import Bookmark from './Bookmark';

const propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const defaultProps = {
  bookmarks: [],
};

const BookmarksList = ({ bookmarks }) => {
  const styleList = {
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const renderBookmarks = bookmarks && bookmarks.map((bookmark, i) =>
    <Bookmark
      key={i}
      href={bookmark.url}
      children={bookmark.title}
    />
  );

  return <ul style={styleList}>{renderBookmarks}</ul>;
};

BookmarksList.propTypes = propTypes;
BookmarksList.defaultProps = defaultProps;

export default BookmarksList;
