import React, { PropTypes } from 'react';
import Folder from '../containers/Folder';

const styles = {
  app: {
    display: 'flex',
  },
  folder: {
    width: 300,
    borderRight: '1px solid rgba(255, 255, 255, 1)',
  },
};

const Grid = ({
  activeFolders,
  folders,
  addFolder,
}) => (
  <div style={styles.app}>
    {activeFolders.map((folder) => (
      <div key={folder.id} style={styles.folder}>
        <Folder folder={folder} />
      </div>
    ))}
    <div style={styles.folder}>
      <h2>Nieuwe toevoegen</h2>
      <select onChange={(event) => addFolder(event.target.value)}>
        {folders.map(folder => (
          <option
            key={folder.id}
            children={folder.title}
            value={folder.id}
          />
        ))}
      </select>
    </div>
  </div>
);

export default Grid;
