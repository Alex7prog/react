import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.githubusercontent.com/u/0?v=4',
};

const App = () => {
  return <Comment user={userInfo} text="Good job!" date={new Date('2019-01-01T11:32:19.566Z')} />;
};

export default App;
