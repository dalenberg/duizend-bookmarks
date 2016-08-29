import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { fetchFolders, changeCurrentFolder } from '../actions/folders';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Heading from './Heading';

const propTypes = {
  folders: PropTypes.array.isRequired,
  currentFolder: PropTypes.string.isRequired,
  loadFolders: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

const foldersListStyle = {
  padding: '30px 0',
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
  border: '1px solid rgba(0, 0, 0, 0.1)',
  height: 30,
  color: 'rgba(0, 0, 0, 0.7)',
  fontSize: 14,
};

class SelectBookmarkContainer extends Component {
  componentWillMount() {
    this.props.loadFolders();
  }

  render() {
    const { folders, currentFolder, onChange } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName="animation"
        transitionAppear
        transitionAppearTimeout={500}
      >
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
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  folders: state.folders.items,
  currentFolder: state.folders.current,
});

const mapDispatchToProps = (dispatch) => ({
  loadFolders: () => { dispatch(fetchFolders('1')); },
  onChange: (folder) => { dispatch(changeCurrentFolder(folder)); },
});

SelectBookmarkContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectBookmarkContainer);
