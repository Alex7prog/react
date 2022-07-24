// Status toggler

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Toggler from './Toggler';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Toggler />);
