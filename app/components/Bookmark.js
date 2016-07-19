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
  color: '#ccc',
  padding: 22,
  margin: 10,
  textDecoration: 'none',
  height: 90,
  border: '1px solid rgba(0,0,0,0.06)',
  overflow: 'hidden',
  borderRadius: 6,
  // boxShadow: '0 2px 20px rgba(0,0,0,0.02)',
  backgroundColor: '#fff',
};

const styleHeading = {
  margin: 0,
  padding: 0,
  fontSize: 20,
  fontWeight: 500,
  color: '#333',
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all',
  overflow: 'hidden',
};

const styleUrl = {
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all',
  overflow: 'hidden',
};

const Bookmark = ({ href, id, children }) => (
  <a
    id={`bookmark_${id}`}
    href={href}
    style={styleLink}
  >
    <h3 style={styleHeading}>{children}</h3>
    <span style={styleUrl}>{href}</span>
  </a>
);

Bookmark.propTypes = propTypes;

export default Bookmark;
