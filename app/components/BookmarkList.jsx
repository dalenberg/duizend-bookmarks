import React, { PropTypes } from 'react';
import Bookmark from '../components/Bookmark';

const styles = {
  folder: {
    height: '100vh',
    overflow: 'auto',
  },
  bookmarksList: {
    padding: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    padding: 20,
    color: '#fff',
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

const defaultProps = {
  bookmarks: [],
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
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} {...bookmark} />
      ))}
    </div>
  </section>
);

BookmarkList.propTypes = propTypes;
BookmarkList.defaultProps = defaultProps;

export default BookmarkList;
