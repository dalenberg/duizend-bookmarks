import React, { PropTypes } from 'react';

const propTypes = {
  folders: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  currentFolder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  title: PropTypes.string,
};

const foldersListStyle = {
  borderBottom: '1px solid #ddd',
  padding: 20,
  textAlign: 'center'
};

const FoldersFilter = ({ folders, loading, onChange, currentFolder, title }) => (
  <div style={foldersListStyle}>
    {!loading &&
      <select
        name="folders"
        onChange={e => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      >
        {folders.map(folder =>
          <option
            key={folder.id}
            value={folder.id}
            children={folder.title}
            selected={currentFolder === folder.id}
          />
        )}
      </select>
    }
  </div>
);

FoldersFilter.propTypes = propTypes;

export default FoldersFilter;
