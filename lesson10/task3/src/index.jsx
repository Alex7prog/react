// Boiling calculator

import React from 'react';
import { createRoot } from 'react-dom/client';
import Calculator from './Calculator';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(<Calculator />);
