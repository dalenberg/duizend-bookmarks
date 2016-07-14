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
  width: 200,
  color: '#333',
  padding: 20,
  boxSizing: 'border-box',
  textDecoration: 'none',
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
