import * as React from 'react';
import { useEffect, useState } from 'react';
import { url } from '../api/constants';
import { getAllBusinesses } from '../api/businesses';

const App = () => {
  const [randomBusiness, setRandomBusiness] = useState({});
  const { isLoading, error, data } = getAllBusinesses();

  useEffect(() => {
    fetch(`${url}/business/random`)
      .then(r => r.json())
      .then(d => setRandomBusiness(d));
  }, []);
  return (
    <>
      <div>
        <h1>URL: {url}</h1>
        {randomBusiness && (
          <>
            <h3>Trending Business</h3>
            {JSON.stringify(randomBusiness)}
          </>
        )}
      </div>
      <hr />
      <div>
        {isLoading && <p>Loading all businesses</p>}
        {error && <p>Error in loading all businesses</p>}
        {data && (
          <>
            <h3>All Businesses</h3>
            {data.map(b => (
              <p key={b.url}>{JSON.stringify(b)}</p>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default App;
