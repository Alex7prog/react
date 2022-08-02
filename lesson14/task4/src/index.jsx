// Event subscription - React hooks

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import ConnectionStatus from './ConnectionStatus';

const root = createRoot(document.querySelector('#root'));

root.render(<ConnectionStatus />);
