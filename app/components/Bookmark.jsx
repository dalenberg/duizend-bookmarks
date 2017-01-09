import React, { PropTypes } from 'react';
import { IBookmark } from '../types';

const styleLink = {
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'bottom',
  boxSizing: 'border-box',
  padding: '40px 15px 15px',
  margin: 10,
  textDecoration: 'none',
  fontSize: 12,
  fontWeight: 400,
  color: 'blue',
  width: 160,
  border: '2px solid blue',
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
    {title.length > 40 ? `${title.substr(0, 40)}...` : title}
  </a>
);

export default Bookmark;
