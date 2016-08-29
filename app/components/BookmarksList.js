import React, { PropTypes } from 'react';
import Bookmark from './Bookmark';
import { Motion, TransitionMotion, spring, presets } from 'react-motion';

const propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

const defaultProps = {
  bookmarks: [],
  loading: false,
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
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
};

const willEnter = () => ({
  height: 0,
});

const willLeave = () => ({
  height: 0,
});

const NoBookmarks = () => (
  <Motion defaultStyle={{ opacity: 0, paddingTop: 0 }} style={{ opacity: spring(1), paddingTop: spring(100) }}>
    {interpolatingStyle => <div style={interpolatingStyle}>
      <div style={styleEmpty}>
        <p>No bookmarks in this folder. Select a folder in the right top corner!</p>
      </div>
    </div>}
  </Motion>
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
      height: spring(120, presets.gentle),
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
