// Rendering list

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import NumbersList from './NumbersList';

const root = createRoot(document.querySelector('#root'));

const numbers = [1, 2, 3, 4, 5];

root.render(<NumbersList numbers={numbers} />);
