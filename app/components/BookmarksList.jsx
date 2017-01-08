import React, { PropTypes } from 'react';
import Bookmark from './Bookmark';

const propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

const defaultProps = {
  bookmarks: [],
  loading: false,
};

const bookmarksList = {
  padding: 20,
}

const NoBookmarks = () => (
  <div>
    <p>No bookmarks in this folder. Select a folder in the right top corner!</p>
  </div>
);

const BookmarksList = ({ bookmarks, loading }) => {
  return (
    <div style={bookmarksList}>
      {(!loading && bookmarks.length === 0) ? <NoBookmarks /> :
        <div>
          {bookmarks.map(({ id, title, url}) => (
            <div key={id}>
              <Bookmark
                href={url}
                children={title}
                id={id}
              />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

BookmarksList.propTypes = propTypes;
BookmarksList.defaultProps = defaultProps;

export default BookmarksList;
