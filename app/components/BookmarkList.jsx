import React, { PropTypes } from 'react';
import Bookmark from '../components/Bookmark';

const styles = {
  header: {
    display: 'flex',
    padding: 10,
    boxSizing: 'border-box',
    color: '#fff',
  },
  bookmarksList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  title: {
    margin: 0,
    padding: 0,
    color: 'blue',
    fontWeight: 600,
    fontSize: 20,
  },
  delete: {
    color: 'rgba(0, 0, 255, .2)',
    borderColor: 'rgba(0, 0, 255, .2)',
    borderWidth: 2,
    borderStyle: 'solid',
    fontWeight: 600,
    display: 'block',
    padding: '5px 8px',
    lineHeight: 1,
    fontSize: 14,
    marginLeft: 10,
    cursor: 'pointer',
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
  <section>
    <div style={styles.header}>
      <h1 style={styles.title}>{folder.title}</h1>
      <a style={styles.delete} onClick={() => deleteBookmark(folder.id)}>x</a>
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
