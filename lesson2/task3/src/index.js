// JSX - elements rendering - next steps

import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

const renderSeconds = time => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 === 0 ? '#000' : '#fff';
  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );

  root.render(element);
};

setInterval(() => renderSeconds(new Date()), 1000);
