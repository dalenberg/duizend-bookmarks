import React, { PropTypes } from 'react';
import Bookmark from '../components/Bookmark';

const styles = {
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

const BookmarkList = ({
  title,
  bookmarks,
}) => (
  <section>
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

export default BookmarkList;
