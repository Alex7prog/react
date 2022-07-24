// Color picker

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import ColorPicker from './ColorPicker';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<ColorPicker />);
