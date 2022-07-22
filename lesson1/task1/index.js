// First React App

// /* eslint-disable no-undef */

// <div class="greeting">Hello, React!</div>;

// JS
// const rootElement = document.querySelector('#root');

// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);

// use React
const rootElement = document.querySelector('#root');

const greetingElem = React.createElement('div', { className: 'greeting' }, 'Hello, React!');
ReactDOM.render(greetingElem, rootElement);
