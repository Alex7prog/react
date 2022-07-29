// Children

import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>

        <Dialog isOpen={this.state.isOpen} title={'Recommendation'} onClose={this.hideDialog}>
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
