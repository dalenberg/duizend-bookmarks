import React, { PropTypes } from 'react';

const styles = {
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    fontSize: 14,
    borderBottom: '1px solid #f0f0f0',
    color: '#333',
    textDecoration: 'none',
  },
  image: {
    marginRight: 5,
    width: 16,
    height: 16,
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const Bookmark = ({
  id,
  title,
  url,
}) => (
  <a
    id={`bookmark_${id}`}
    href={url}
    style={styles.link}
    title={url}
  >
    <img style={styles.image} src={`chrome://favicon/${url}`} alt={`Favicon of ${url}`} />
    <span style={styles.text}>{title}</span>
  </a>
);

Bookmark.propTypes = propTypes;

export default Bookmark;
