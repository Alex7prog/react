import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [netStatus, setNetStatus] = useState('online');

  useEffect(() => {
    window.addEventListener('online', () => setNetStatus('online'));
    window.addEventListener('offline', () => setNetStatus('offline'));

    return () => {
      window.removeEventListener('online', () => setNetStatus('online'));
      window.removeEventListener('offline', () => setNetStatus('offline'));
    };
  }, ['online']);

  console.log(netStatus);
  return (
    <>
      {netStatus === 'online' ? (
        <div className="status">{netStatus}</div>
      ) : (
        <div className="status status_offline">{netStatus}</div>
      )}
    </>
  );
};

export default ConnectionStatus;
