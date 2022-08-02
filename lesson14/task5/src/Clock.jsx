import React, { useState, useEffect } from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('hh:mm:ss A');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [date, setTimer] = useState(formatDate(getTimeWithOffset(offset)));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(formatDate(getTimeWithOffset(offset)));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{date}</div>
    </div>
  );
};

export default Clock;
