import React, {Component} from 'react';
import BookmarksList from './BookmarksList';


var items = [
  { title: 'Test', url: 'google.com'},
  { title: 'Joe', url: 'joe.com'}
]

export default class BookmarkContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: items
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
