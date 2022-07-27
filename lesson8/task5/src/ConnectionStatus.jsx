import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    netStatus: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onOnLine);
    window.addEventListener('offline', this.onOffLine);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnLine);
    window.removeEventListener('offline', this.onOffLine);
  }

  onOnLine = () => {
    this.setState({ netStatus: 'online' });
  };

  onOffLine = () => {
    this.setState({ netStatus: 'offline' });
  };

  render() {
    return (
      <>
        {this.state.netStatus === 'online' ? (
          <div className="status">Online</div>
        ) : (
          <div className="status status_offline">Offline</div>
        )}
      </>
    );
  }
}

export default ConnectionStatus;
