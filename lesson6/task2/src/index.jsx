// Conditional rendering with &&

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Mailbox from './Mailbox';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(<Mailbox unreadMessages={[]} />);
