import React from 'react';

const styles = {
  new: {
    backgroundColor: '#fff',
    boxShadow: '0 3px 5px rgba(0, 0, 0, .04)',
    borderRadius: 4,
    padding: 20
  }
};

const SelectFolder = ({
  addFolder,
  folders,
}) => (
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
);

export default SelectFolder;
