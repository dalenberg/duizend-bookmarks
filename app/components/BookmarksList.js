import React, {Component} from 'react';
import Bookmark from './Bookmark';

export default class BookmarksList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //
    // chrome.bookmarks.getTree(function(tree) {
    //   console.log(tree)
    // });
    let styleList = {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    let bookmarks = this.props.data.map((bookmark, i) => <Bookmark key={i} url={bookmark.url}>{bookmark.title}</Bookmark>)
    return <ul style={styleList}>{bookmarks}</ul>;
  }
}
