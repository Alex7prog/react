// Profile

import React from 'react';
import { createRoot } from 'react-dom/client';
import Profile from './Profile';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

root.render(<Profile userData={userData} />);
