import React from 'react';
import BookmarkContainer from '../containers/BookmarkContainer';
import SelectBookmarkContainer from '../containers/SelectBookmarkContainer';

const styles = {
  app: {
    display: 'flex',

  },
  folder: {
    width: 300,
    borderRight: '1px solid rgba(0, 0, 0, .1)',
    height: '100vw',
  },
};

const App = () => (
  <div style={styles.app}>
    <div style={styles.folder}>
      <SelectBookmarkContainer folderId="1" />
      <BookmarkContainer folderId="1" />
    </div>

    <div style={styles.folder}>
      <SelectBookmarkContainer />
      <BookmarkContainer />
    </div>
  </div>
);

export default App;
