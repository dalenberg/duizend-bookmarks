import React, {Component} from 'react';

export default class Bookmark extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li><a {...this.props} href={this.props.url}>{this.props.children}</a></li>
    );
  }
}

Bookmark.propTypes = {
  children: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
}
