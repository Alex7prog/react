// Controlled component

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Search from './Search';

const root = createRoot(document.querySelector('#root'));

root.render(<Search />);
