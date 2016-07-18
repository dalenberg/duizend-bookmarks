import React, { PropTypes } from 'react';

const propTypes = {
  folders: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  currentFolder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  title: PropTypes.string,
};

const foldersListHeading = {
  margin: 0,
};

const foldersListStyle = {
  borderBottom: '1px solid #ddd',
  padding: '20px 0',
  marginBottom: 10,
  backgroundColor: 'white',
};

const foldersListContainer = {
  width: 780,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
};

const FoldersFilter = ({ folders, loading, onChange, currentFolder, title }) => (
  <div style={foldersListStyle}>
    {!loading &&
      <div style={foldersListContainer}>
        <h3 style={foldersListHeading}>{title}</h3>
        <select
          name="folders"
          defaultValue={currentFolder}
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
            />
          )}
        </select>
      </div>
    }
  </div>
);

FoldersFilter.propTypes = propTypes;

export default FoldersFilter;
