import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

class Bookmark extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styleListItem = {
      listStyle: 'none',
      display: 'inline-block'
    };

    let styleLink = {
      display: 'inline-block',
      width: 200,
      color: '#333',
      padding: 20,
      boxSizing: 'border-box',
      textDecoration: 'none',
    };

    return (
      <li style={styleListItem}><a {...this.props} href={this.props.url} style={styleLink}>{this.props.children}</a></li>
    );
  }
}

Bookmark.propTypes = propTypes;

export default Bookmark;
