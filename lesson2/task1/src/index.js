// JSX - render elements

import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

// <> - empty tag, wrapper, don't displayed in html
const element = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Submit</button>
    </div>
  </>
);

ReactDOM.render(element, rootElement);
