import React, { PropTypes } from 'react';
import Bookmark from './Bookmark';
import { TransitionMotion, spring, presets } from 'react-motion';

const propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const defaultProps = {
  bookmarks: [],
};

const styleList = {
  width: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
};

const styleEmpty = {
  textAlign: 'center',
  fontSize: 20,
  padding: 30,
}

const willEnter = () => ({
  height: 0,
});

const willLeave = () => ({
  height: 0,
});

const NoBookmarks = () => (
  <div style={styleEmpty}>
    <p>No bookmarks in this folder...</p>
    <p>Select a folder in the right top corner!</p>
  </div>
);

const BookmarksList = ({ bookmarks, loading }) => {
  const getDefaultStyles = () => bookmarks.map(bookmark => ({
    bookmark,
    key: bookmark.id,
    style: {
      height: 0,
    },
  }));

  const getStyles = () => bookmarks.map((bookmark) => ({
    data: bookmark,
    key: bookmark.id,
    style: {
      height: spring(110, presets.gentle),
    },
  }));

  return (
    <div>
      {(!loading && bookmarks.length === 0) ? <NoBookmarks /> :
        <TransitionMotion
          defaultStyles={getDefaultStyles()}
          styles={getStyles()}
          willLeave={willLeave}
          willEnter={willEnter}
        >
        {styles =>
          <div style={styleList}>
            {styles.map(({ key, style, data }) => (
              <div key={key} style={style}>
                <Bookmark
                  href={data.url}
                  children={data.title}
                  id={data.id}
                />
              </div>
            ))}
          </div>
        }
        </TransitionMotion>
      }
    </div>
  );
};

BookmarksList.propTypes = propTypes;
BookmarksList.defaultProps = defaultProps;

export default BookmarksList;
