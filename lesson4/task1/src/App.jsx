import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={5} interval={5000} />
      <Counter start={12} interval={3000} />
      <Counter start={-21} interval={1000} />
    </>
  );
};

export default App;
