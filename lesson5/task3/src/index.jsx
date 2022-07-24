// Counter

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Counter from './Counter';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Counter />);
