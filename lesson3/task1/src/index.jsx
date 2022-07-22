// Functional Components

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import './search.scss';
import Search from './Search';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Search name="Bob" />);
