// First React App with JSX
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const renderGreeting = elem => {
  const containerElem = (
    <div className="greeting">
      <div className="greeting__title">Hello, world!</div>
      <div className="greeting__text">I'm learning React</div>
    </div>
  );

  ReactDOM.render(containerElem, elem);
};

renderGreeting(rootElement);
