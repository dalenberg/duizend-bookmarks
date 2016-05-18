import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';

render(
  <App />,
  document.getElementById('root')
);

chrome.bookmarks.getTree(function(tree) {
  console.log(tree[0].children);
});
