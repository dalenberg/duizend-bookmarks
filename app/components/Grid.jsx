import React, { PropTypes } from 'react';
import Folder from '../containers/Folder';

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

const Grid = ({
  folders,
}) => (
  <div style={styles.app}>
    {folders.map((folder) => (
      <div key={folder.id} style={styles.folder}>
        <Folder folder={folder} />
      </div>
    ))}
  </div>
);

export default Grid;
