import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { getActiveFolders, getAllFolders } from '../selectors';
import { addActiveFolder, fetchFolders, moveActiveFolders } from '../actions';

import Folder from './Folder';
import SelectFolder from '../components/SelectFolder';

const styles = {
  app: {
    display: 'flex',
    flexWrap: 'nowrap',
    marginLeft: 10,
    marginRight: 10,
    overflow: 'scroll',
  },
  title: {
    margin: 0,
    fontSize: 16,
    fontWeight: 500
  },
  header: {
    padding: 20
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
        <div style={styles.folder}>
          <div style={styles.header}>
            <h2 style={styles.title}>Nieuw</h2>
          </div>
          <SelectFolder
            folders={this.props.folders}
            addFolder={this.props.addFolder}
          />
        </div>
      </div>
    )
  }
}

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
