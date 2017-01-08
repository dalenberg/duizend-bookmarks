import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { fetchFolders, changeCurrentFolder } from '../actions/folders';
import Heading from '../components/Heading';

const propTypes = {
  folders: PropTypes.array.isRequired,
  currentFolder: PropTypes.string.isRequired,
  loadFolders: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

const foldersListContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'blue',
  padding: 20,
  color: '#fff',
};

const foldersListSelect = {
  background: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  height: 30,
  color: '#fff',
  fontSize: 14,
};

class SelectBookmarkContainer extends Component {
  componentWillMount() {
    this.props.loadFolders();
  }

  render() {
    const { folders, currentFolder, onChange } = this.props;
    return (
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
            const dashes = Array(depth).join('--');
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
    );
  }
}

const mapStateToProps = (state) => ({
  folders: state.folders.items,
  currentFolder: state.active.current,
});

const mapDispatchToProps = (dispatch) => ({
  loadFolders: () => dispatch(fetchFolders('1')),
  onChange: (folder) => dispatch(changeCurrentFolder(folder)),
});

SelectBookmarkContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectBookmarkContainer);
