// Class Components

import React from 'react';
import { createRoot } from 'react-dom/client';
import Search from './Search';
import './index.scss';
import './search.scss';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Search name="Bob" />);
