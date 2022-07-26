// Lifecycle methods

import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './Demo';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(<Demo />);
