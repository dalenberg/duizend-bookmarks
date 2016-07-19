import React, { PropTypes } from 'react';
import Heading from './Heading';

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
  padding: '15px 0',
  marginBottom: 10,
  backgroundColor: 'rgb(127, 140, 141)',
};

const foldersListContainer = {
  width: 780,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
};

const foldersListSelect = {
  background: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  height: 30,
  color: '#fff',
  fontSize: 14,
};

const FoldersFilter = ({ folders, loading, onChange, currentFolder, title }) => (
  <div style={{
    opacity: loading ? 0 : 1,
    transition: '.2s opacity',
  }}>
    <div style={foldersListStyle}>
      <div style={foldersListContainer}>
        <Heading id={currentFolder} />
        <select
          style={foldersListSelect}
          name="folders"
          defaultValue="default"
          onChange={e => {
            e.preventDefault();
            onChange(e.target.value);
          }}
        >
          <option value="default" disabled>Select folder</option>
          {folders.map(folder => {
            const { id, title, depth } = folder;
            const dashes = Array(depth).join("--");
            const dashedTitle = `${dashes} ${title}`;
            return (
              <option
                key={id}
                value={id}
                children={dashedTitle}
              />
            );
          })}
        </select>
      </div>
    </div>
  </div>
);

FoldersFilter.propTypes = propTypes;

export default FoldersFilter;
