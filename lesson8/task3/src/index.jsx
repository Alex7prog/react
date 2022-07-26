// Event subscription

import React from 'react';
import { createRoot } from 'react-dom/client';
import Dimension from '../../task3/src/Dimension';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(<Dimension />);
