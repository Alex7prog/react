// property Key & pagination

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import UsersList from './UsersList';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 18,
    name: 'Ann',
  },
  {
    id: 'id-5',
    age: 45,
    name: 'Din',
  },
  {
    id: 'id-6',
    age: 18,
    name: 'Lisa',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'John',
  },
];

const root = createRoot(document.querySelector('#root'));

root.render(<UsersList users={users} />);
