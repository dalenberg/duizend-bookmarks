import React, { Component } from 'react';
import Grid from '../components/Grid';

const activeFolders = [{
  id: '304',
  title: 'Stream',
}, {
  id: '309',
  title: 'Watch',
}];

class App extends Component {
  constructor() {
    super();

    this.state = {
      folders: [],
    };
  }

  componentDidMount() {
    this.setState({
      folders: activeFolders,
    });
  }

  render() {
    return (
      <Grid folders={this.state.folders} />
    );
  }
};

export default App;
