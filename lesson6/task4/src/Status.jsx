import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onlineStatus: props.isOnline,
    };
  }

  handleOnline = () => {
    this.setState({
      onlineStatus: !this.state.onlineStatus,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.onlineStatus ? <Online /> : <Offline onOnline={this.handleOnline} />}
      </div>
    );
  }
}

export default Status;
