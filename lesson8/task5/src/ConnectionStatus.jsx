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
    const { netStatus } = this.state;
    console.log('netStatus: ', netStatus);
    return (
      <>
        {netStatus === 'online' ? (
          <div className="status">{netStatus}</div>
        ) : (
          <div className="status status_offline">{netStatus}</div>
        )}
      </>
    );
  }
}

export default ConnectionStatus;
