import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.formatDate(this.getTimeWithOffset(props.offset)),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: this.formatDate(this.getTimeWithOffset(this.props.offset)),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatDate = date => moment(date).format('hh:mm:ss A');

  getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.date}</div>
      </div>
    );
  }
}

export default Clock;
