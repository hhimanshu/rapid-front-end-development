import * as React from 'react';
import { useEffect } from 'react';
import { url } from '../api/constants';

const App = () => {
  useEffect(() => {
    fetch('/login', {
      method: 'post',
    }).then(r => console.log(r.status));

    fetch('/user').then(r => console.log(r.status));
  });
  return (
    <h1>
      URL: {url}
    </h1>
  );
};
export default App;
