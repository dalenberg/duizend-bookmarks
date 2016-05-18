import React, {Component} from 'react';

export default class App extends Component {

  render() {

    chrome.bookmarks.getTree(function(tree) {
      console.log(tree[0].children);
    })

    return (
      <h2>Joe</h2>
    );
  }
}
