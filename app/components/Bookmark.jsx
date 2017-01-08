import React, { PropTypes } from 'react';
import { IBookmark } from '../types';

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

const Bookmark = ({
  id,
  title,
  url,
}) => (
  <a
    id={`bookmark_${id}`}
    href={url}
    style={styleLink}
    title={url}
  >
    {title.length > 30 ? `${title.substr(0, 30)}...` : title}
  </a>
);

export default Bookmark;
