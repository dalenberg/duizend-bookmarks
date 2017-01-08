import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const styleLink = {
  backgroundColor: '#fff',
  display: 'block',
  boxSizing: 'border-box',
  padding: 15,
  marginBottom: 20,
  textDecoration: 'none',
  fontSize: 18,
  fontWeight: 500,
  color: '#444',
};

const Bookmark = ({ href, id, children }) => (
  <a
    id={`bookmark_${id}`}
    href={href}
    style={styleLink}
    title={href}
  >
    {children.length > 30 ? `${children.substr(0, 80)}...` : children}
  </a>
);

Bookmark.propTypes = propTypes;

export default Bookmark;
