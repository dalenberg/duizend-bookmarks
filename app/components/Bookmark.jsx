import React, { PropTypes } from 'react';

const styles = {
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    fontSize: 14,
    borderBottom: '1px solid #ddd',
    color: '#333',
    textDecoration: 'none'
  },
  image: {
    marginRight: 5,
  }
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
    <img style={styles.image} src={`chrome://favicon/${url}`} />
    <span style={styles.text}>{title.length > 37 ? `${title.substr(0, 34)}...` : title}</span>
  </a>
);

export default Bookmark;
