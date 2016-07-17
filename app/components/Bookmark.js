import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const styleListItem = {
  listStyle: 'none',
  display: 'inline-block',
};

const styleLink = {
  display: 'inline-block',
  width: 180,
  boxSizing: 'border-box',
  color: '#333',
  padding: 20,
  margin: 10,
  boxSizing: 'border-box',
  textDecoration: 'none',
  height: 80,
  border: '1px solid #ddd',
  overflow: 'hidden',
};

const Bookmark = ({ href, children }) => (
  <li style={styleListItem}>
    <a
      href={href}
      style={styleLink}
      children={children}
    />
  </li>
);

Bookmark.propTypes = propTypes;

export default Bookmark;
