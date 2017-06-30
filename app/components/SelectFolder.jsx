import React from 'react';

const styles = {
  new: {
    backgroundColor: '#fff',
    boxShadow: '0 3px 5px rgba(0, 0, 0, .04)',
    borderRadius: 4,
    padding: 20
  },
  folder: {
    flexShrink: 0,
    width: 330,
    margin: 10,
    cursor: 'move',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    alignItems: 'center',
  },
  bookmarksList: {
    overflow: 'auto',
    maxHeight: 'calc(100vh - 100px)',
    backgroundColor: '#fff',
    boxShadow: '0 3px 5px rgba(0, 0, 0, .04)',
    borderRadius: 3,
  },
  title: {
    margin: 0,
    fontSize: 16,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const SelectFolder = ({
  addFolder,
  folders,
}) => (
  <div style={styles.folder}>
    <div style={styles.header}>
      <h2 style={styles.title}>{chrome.i18n.getMessage('newfolder')}</h2>
    </div>

    <div style={styles.new}>
      <p>{chrome.i18n.getMessage('selectfolder')}</p>
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

export default SelectFolder;
