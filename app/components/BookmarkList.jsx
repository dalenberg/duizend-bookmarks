import React, { PropTypes } from 'react';
import Bookmark from '../components/Bookmark';

const styles = {
  folder: {
    height: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    padding: 20,
    boxSizing: 'border-box',
    color: '#fff',
    height: '4rem',
  },
  bookmarksList: {
    padding: 20,
    height: 'calc(100% - 4rem)',
    boxSizing: 'border-box',
    overflow: 'auto',
  },
  title: {
    margin: 0,
    padding: 0,
    color: '#fff',
    fontWeight: 300,
    fontSize: 20,
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
