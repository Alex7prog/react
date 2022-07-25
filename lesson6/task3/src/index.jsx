// Cancel rendering

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Page from './Page';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Page />);
