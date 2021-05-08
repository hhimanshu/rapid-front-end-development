import * as React from 'react';
import { useEffect, useState } from 'react';
import { url } from '../api/constants';

const App = () => {
  const [businesses, setBusinesses] = useState([]);
  const [randomBusiness, setRandomBusiness] = useState({});

  useEffect(() => {
    fetch(`${url}/businesses`, {})
      .then(r => r.json())
      .then(d => setBusinesses(d.data.search.business));

    fetch(`${url}/business/random`)
      .then(r => r.json())
      .then(d => setRandomBusiness(d));
  }, []);
  return (
    <>
      <h1>URL: {url}</h1>
      {randomBusiness && (
        <>
          <h3>Trending Business</h3>
          {JSON.stringify(randomBusiness)}
        </>
      )}
      <hr />
      {businesses.length > 0 && (
        <>
          <h3>All Businesses</h3>
          {businesses.map(b => (
            <p key={b.url}>{JSON.stringify(b)}</p>
          ))}
        </>
      )}
    </>
  );
};
export default App;
