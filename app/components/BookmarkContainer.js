import React, { Component, PropTypes } from 'react';
import BookmarksList from './BookmarksList';

const propTypes = {
  folder: PropTypes.string.isRequired,
};

const defaultProps = {
  folder: '304',
};

const localBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

class BookmarkContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { data: localBookmarks };
    this.setData = this.setData.bind(this);
  }

  componentWillMount() {
    localStorage.clear();
    this.getBookmarks(this.props.folder);
  }

  setData(data) {
    this.setState({ data });
    localStorage.setItem('bookmarks', JSON.stringify(this.state.data));
  }

  getBookmarks(folderId) {
    if(localBookmarks.length > 0) {
      this.setState(localBookmarks);
    } else {
      chrome.bookmarks.getChildren(folderId, this.setData);
    }
  }

  render() {
    return (
      <BookmarksList data={this.state.data} />
    );
  }
}

BookmarkContainer.propTypes = propTypes;
BookmarkContainer.defaultProps = defaultProps;

export default BookmarkContainer;
