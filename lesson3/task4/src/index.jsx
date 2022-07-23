// Greeting

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(
  <Greeting firstName="John" lastName="Doe" birthDate={new Date('2005-01-01T11:11:11.819Z')} />,
);
