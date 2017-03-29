import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid from '../components/Grid';

import { getActiveFolders, getAllFolders } from '../selectors';
import { addActiveFolder, fetchFolders } from '../actions';

const propTypes = {
  getFolders: PropTypes.func,
  activeFolders: PropTypes.array,
  folders: PropTypes.array,
  addFolder: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeFolders: getActiveFolders(state),
  folders: getAllFolders(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFolders: () => dispatch(fetchFolders()),
  addFolder: (id) => dispatch(addActiveFolder(id)),
});

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
    );
  }
}

App.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
