// Arguments to the handler

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Colors from './Colors';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Colors />);
