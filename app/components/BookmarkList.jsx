import React, { PropTypes } from 'react';
import Bookmark from '../components/Bookmark';

const styles = {
  folder: {
    flexShrink: 0,
    width: 330,
    margin: 10,
    cursor: 'move',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
  },
  bookmarksList: {
    backgroundColor: '#fff',
    boxShadow: '0 3px 5px rgba(0, 0, 0, .04)',
    borderRadius: 4,
    overflow: 'auto',
    maxHeight: '90vh'
  },
  title: {
    margin: 0,
    fontSize: 16,
    fontWeight: 500
  },
  delete: {
    cursor: 'pointer'
  },
  empty: {
    padding: 20,
  },
};

const propTypes = {
  folder: PropTypes.object.isRequired,
  bookmarks: PropTypes.array.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
}

const BookmarkList = ({
  folder,
  bookmarks,
  deleteBookmark
}) => (
  <section style={styles.folder}>
    <div style={styles.header}>
      <h1 style={styles.title}>{folder.title}</h1>
      <a style={styles.delete} onClick={() => deleteBookmark(folder.id)}>x</a>
    </div>
    <div style={styles.bookmarksList}>
      {bookmarks.length === 0 && (
        <div style={styles.empty}>Er zijn geen bookmarks in deze map</div>
      )}
      {bookmarks.map((bookmark) => {
        return bookmark === undefined ? null : (
          <Bookmark key={bookmark.id} {...bookmark} />
        );
      })}
    </div>
  </section>
);

BookmarkList.propTypes = propTypes;

export default BookmarkList;
