import React, { PropTypes } from 'react';
import Folder from '../containers/Folder';

const styles = {
  app: {
    display: 'flex',
    flexWrap: 'nowrap',
    paddingLeft: 10,
  },
  folder: {
    flexShrink: 0,
    width: 300,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    margin: 0,
    fontSize: 16,
    fontWeight: 500,
  },
  header: {
    padding: 20,
  },
  new: {
    backgroundColor: '#fff',
    boxShadow: '0 3px 5px rgba(0, 0, 0, .04)',
    borderRadius: 4,
    padding: 20,
  },
};

const propTypes = {
  activeFolders: PropTypes.array,
  folders: PropTypes.array,
  addFolder: PropTypes.func,
};

const Grid = ({
  activeFolders,
  folders,
  addFolder,
}) => (
  <div style={styles.app}>
    {activeFolders.map((folder) => (
      <div style={styles.folder} key={folder.id}>
        <Folder folder={folder} />
      </div>
    ))}
    <div style={styles.folder}>
      <div style={styles.header}>
        <h2 style={styles.title}>Nieuw</h2>
      </div>

      <div style={styles.new}>
        <p>Selecteer een map om toe te voegen</p>
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
  </div>
);

Grid.propTypes = propTypes;

export default Grid;
