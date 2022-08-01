// Window dimensions - React hooks

import React from 'react';
import { createRoot } from 'react-dom/client';
import Dimensions from './Dimensions';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(<Dimensions />);
