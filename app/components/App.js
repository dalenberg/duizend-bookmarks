import React from 'react';
import BookmarkContainer from './BookmarkContainer';
import SelectBookmarkContainer from './SelectBookmarkContainer';
import './style.css';

const App = () => (
  <div className="App">
    <SelectBookmarkContainer />
    <BookmarkContainer />
  </div>
);

export default App;
