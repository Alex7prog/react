// Loading data from the server

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import User from './User';

const root = createRoot(document.querySelector('#root'));

root.render(<User userId="facebook" />);
