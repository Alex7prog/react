// Tic-tac-toe game

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Game from './Game';

const root = createRoot(document.querySelector('#root'));

root.render(<Game />);
