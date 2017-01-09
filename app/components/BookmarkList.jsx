import React, { PropTypes } from 'react';
import Bookmark from '../components/Bookmark';

const styles = {
  folder: {
    height: '100vh',
    minWidth: '300px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    padding: '15px 25px',
    boxSizing: 'border-box',
    color: '#fff',
    height: '3rem',
  },
  bookmarksList: {
    padding: 10,
    height: 'calc(100% - 3rem)',
    boxSizing: 'border-box',
    overflow: 'auto',
  },
  title: {
    margin: 0,
    padding: 0,
    color: 'rgba(0, 0, 0, .5)',
    fontWeight: 400,
    fontSize: 16,
  },
};

const propTypes = {
  title: PropTypes.string.isRequired,
  bookmarks: PropTypes.array.isRequired,
}

const BookmarkList = ({
  title,
  bookmarks,
}) => (
  <section style={styles.folder}>
    <div style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
    </div>
    <div style={styles.bookmarksList}>
      {bookmarks.length === 0 && (
          <div>Er zijn geen bookmarks in deze map</div>
      )}
      {bookmarks.map((bookmark) => {
        if (bookmark === undefined) {
          return null;
        }
        return (
          <Bookmark key={bookmark.id} {...bookmark} />
        );
      })}
    </div>
  </section>
);

BookmarkList.propTypes = propTypes;

export default BookmarkList;
