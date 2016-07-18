import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const styleLink = {
  display: 'block',
  width: 380,
  boxSizing: 'border-box',
  fontSize: 20,
  color: '#666',
  padding: 20,
  margin: 10,
  textDecoration: 'none',
  height: 100,
  border: '1px solid rgba(0,0,0,0.1)',
  overflow: 'hidden',
  borderRadius: 6,
  boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
};

const Bookmark = ({ href, id, children }) => (
  <a
    id={`bookmark_${id}`}
    href={href}
    style={styleLink}
  >
    {children}
  </a>
);

Bookmark.propTypes = propTypes;

export default Bookmark;
