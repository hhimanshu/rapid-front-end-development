import * as React from 'react';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('/login', {
      method: 'post'
    }).then(r => console.log(r.status))

    fetch('/user').then(r => console.log(r.status))
  })
  return (
    <h1>
      Hello React in TypeScript + Jest + React Testing Library + Storybook
    </h1>
  );
};
export default App;
