import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const formatDate = date => moment(date).format('hh:mm:ss A');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: formatDate(getTimeWithOffset(props.offset)),
    };

    // Don't do this way
    setInterval(() => {
      this.setState({
        timer: formatDate(getTimeWithOffset(props.offset)),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.timer}</div>
      </div>
    );
  }
}

export default Clock;
