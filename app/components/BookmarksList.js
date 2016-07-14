import React, { PropTypes } from 'react';
import Bookmark from './Bookmark';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const defaultProps = {
  data: [],
};

const BookmarksList = ({ data }) => {
  const styleList = {
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const bookmarks = data && data.map((bookmark, i) =>
    <Bookmark
      key={i}
      href={bookmark.url}
      children={bookmark.title}
    />
  );

  return <ul style={styleList}>{bookmarks}</ul>;
};

BookmarksList.propTypes = propTypes;
BookmarksList.defaultProps = defaultProps;

export default BookmarksList;
