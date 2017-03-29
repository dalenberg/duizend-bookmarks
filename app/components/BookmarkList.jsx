import React, { PropTypes } from 'react';
import Bookmark from '../components/Bookmark';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    alignItems: 'center',
  },
  bookmarksList: {
    overflow: 'auto',
    maxHeight: 'calc(100vh - 100px)',
    backgroundColor: '#fff',
    boxShadow: '0 3px 5px rgba(0, 0, 0, .04)',
    borderRadius: 3,
  },
  title: {
    margin: 0,
    fontSize: 16,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  delete: {
    cursor: 'pointer',
  },
  empty: {
    padding: 20,
  },
};

const propTypes = {
  folder: PropTypes.object.isRequired,
  bookmarks: PropTypes.array.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
};

const BookmarkList = ({
  folder,
  bookmarks,
  deleteBookmark,
}) => (
  <section>
    <div style={styles.header}>
      <h1 style={styles.title}>{folder.title}</h1>
      <span style={styles.delete} onClick={() => deleteBookmark(folder.id)}>x</span>
    </div>
    <div style={styles.bookmarksList}>
      {bookmarks.length === 0 && (
        <div style={styles.empty}>{chrome.i18n.getMessage('nobookmarks')}</div>
      )}
      {bookmarks.map((bookmark) => (bookmark &&
        <Bookmark key={bookmark.id} {...bookmark} />
      ))}
    </div>
  </section>
);

BookmarkList.propTypes = propTypes;

export default BookmarkList;
