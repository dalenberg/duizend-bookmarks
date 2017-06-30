import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { getActiveFolders, getAllFolders } from '../selectors';
import { addActiveFolder, fetchFolders, moveActiveFolders } from '../actions';

import Folder from './Folder';
import SelectFolder from '../components/SelectFolder';

const propTypes = {
  getFolders: PropTypes.func,
  activeFolders: PropTypes.array,
  folders: PropTypes.array,
  addFolder: PropTypes.func,
};

const styles = {
  app: {
    display: 'flex',
    flexWrap: 'nowrap',
    marginLeft: 10,
    marginRight: 10,
    overflow: 'scroll',
  },
};

class App extends Component {
  componentDidMount() {
    this.props.getFolders();
  }

  render() {
    return (
      <div style={styles.app}>
        {this.props.activeFolders.map((folder, i) => (
          <Folder
            folder={folder}
            key={folder.id}
            id={folder.id}
            index={i}
            moveFolder={this.props.moveFolder}
          />
        ))}
        <SelectFolder
          folders={this.props.folders}
          addFolder={this.props.addFolder}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default connect(
  (state) => ({
    activeFolders: getActiveFolders(state),
    folders: getAllFolders(state),
  }),
  (dispatch) => ({
    getFolders: () => dispatch(fetchFolders()),
    addFolder: (id) => dispatch(addActiveFolder(id)),
    moveFolder: (from, to) => dispatch(moveActiveFolders(from, to)),
  })
)(DragDropContext(HTML5Backend)(App));
