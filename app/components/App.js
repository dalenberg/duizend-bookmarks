import React, {Component} from 'react';
import BookmarkContainer from './BookmarkContainer';
import BookmarksList from './Bookmark';

export default class App extends Component {

  render() {
    return (
      <BookmarkContainer folder="304" />
    );
  }
}
