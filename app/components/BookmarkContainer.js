import React, {Component} from 'react';
import BookmarksList from './BookmarksList';

export default class BookmarkContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getBookmarks(this.props.folder);
  }

  getBookmarks(folderId) {
    chrome.bookmarks.getChildren(folderId, function(data) {
      this.setState({data: data});
    }.bind(this));
  }

  render() {
    return (
      <BookmarksList data={this.state.data} />
    );
  }
}

BookmarkContainer.propTypes = {
  folder: React.PropTypes.number.isRequired
};

BookmarkContainer.defaultProps = {
  folder: 304
};
