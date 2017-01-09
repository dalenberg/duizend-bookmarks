import React, { PropTypes } from 'react';
import { IBookmark } from '../types';

const styleLink = {
  backgroundColor: '#fff',
  display: 'block',
  boxSizing: 'border-box',
  padding: 15,
  marginBottom: 10,
  textDecoration: 'none',
  fontSize: 12,
  fontWeight: 400,
  color: '#666',
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
    {title.length > 40 ? `${title.substr(0, 30)}...` : title}
  </a>
);

export default Bookmark;
