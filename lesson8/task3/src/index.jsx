// Event subscription

import React from 'react';
import { createRoot } from 'react-dom/client';
import Dimensions from '../../task3/src/Dimensions';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(<Dimensions />);
