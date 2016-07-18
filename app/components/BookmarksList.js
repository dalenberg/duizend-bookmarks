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

const willEnter = () => ({
  height: 0,
});

const willLeave = () => ({
  height: 0,
});

const BookmarksList = ({ bookmarks }) => {
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
  );
};

BookmarksList.propTypes = propTypes;
BookmarksList.defaultProps = defaultProps;

export default BookmarksList;
