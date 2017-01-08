import React, { Component } from 'react';
import Folder from './Folder';

const styles = {
  app: {
    display: 'flex',
  },
  folder: {
    width: 300,
    borderRight: '1px solid rgba(0, 0, 0, .1)',
    height: '100vw',
  },
};

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

  renderFolder(folder) {
    return (
      <div key={folder.id} style={styles.folder}>
        <Folder folder={folder} />
      </div>
    );
  }

  render() {
    return (
      <div style={styles.app}>
        {this.state.folders.map(this.renderFolder)}
      </div>
    );
  }
};

export default App;
