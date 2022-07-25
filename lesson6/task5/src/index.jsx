// Component for authorization

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Auth from './Auth';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Auth />);
