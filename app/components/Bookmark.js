import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const styleLink = {
  width: 380,
  display: 'block',
  boxSizing: 'border-box',
  color: '#ccc',
  padding: '20px 0',
  margin: 10,
  textDecoration: 'none',
  borderTop: '1px solid rgba(0,0,0,0.06)',
};

const styleHeading = {
  margin: 0,
  padding: 0,
  fontSize: 24,
  fontWeight: 500,
  color: '#444',
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all',
  overflow: 'hidden',
};

const styleUrl = {
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all',
  overflow: 'hidden',
  marginTop: 4,
  display: 'block',
};

const Bookmark = ({ href, id, children }) => (
  <a
    id={`bookmark_${id}`}
    href={href}
    style={styleLink}
  >
    <h3 style={styleHeading}>{children.length > 30 ? `${children.substr(0, 80)}...` : children}</h3>
    <span style={styleUrl}>{href.length > 55 ? `${href.substr(0, 52)}...` : href}</span>
  </a>
);

Bookmark.propTypes = propTypes;

export default Bookmark;
