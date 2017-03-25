import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getActiveFolders, getAllFolders } from '../selectors';
import { addActiveFolder, fetchFolders } from '../actions';
import Grid from '../components/Grid';

class App extends Component {
  componentDidMount() {
    this.props.getFolders();
  }

  render() {
    return (
      <Grid
        activeFolders={this.props.activeFolders}
        folders={this.props.folders}
        addFolder={this.props.addFolder}
      />
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
  })
)(App);
