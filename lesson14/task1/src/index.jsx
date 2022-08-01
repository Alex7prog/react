// Counter - React Hooks

import React from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './Counter';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(<Counter />);
