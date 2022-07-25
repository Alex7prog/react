// Offline / Online status

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Status from './Status';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Status isOnline={false} />);
