import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
    };
  }

  handleOnline = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    console.log(this.state.isOnline);
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline onOnline={this.handleOnline} />}
      </div>
    );
  }
}

export default Status;
