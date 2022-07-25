import React from 'react';
const Offline = props => (
  <>
    <span className="status__text">Offline</span>
    <button className="status__btn" onClick={props.onOnline}>
      Reconnect
    </button>
  </>
);

export default Offline;
