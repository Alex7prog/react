// Good button

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import GoodButton from './GoodButton';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<GoodButton />);
