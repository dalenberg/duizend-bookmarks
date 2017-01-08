import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFolders } from '../actions/bookmarks';
import Grid from '../components/Grid';

class App extends Component {
  componentDidMount() {
    this.props.getFolders();
  }

  render() {
    return (
      <Grid folders={this.props.folders} />
    )
  }
}

export default connect(
  (state) => ({
    folders: state.activeFolders,
  }),
  (dispatch) => ({
    getFolders: () => dispatch(fetchFolders()),
    // addActiveFolder: (id) => dispatch(addActiveFolder(id)),
  })
)(App);
