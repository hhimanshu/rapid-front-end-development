import * as React from 'react';
import { url } from '../api/constants';
import { getBusinesses, getRandomBusiness } from '../api/businesses';

const App = () => {
  const {
    isLoading: isAllBusinessesLoading,
    error: businessesError,
    data: businesses,
  } = getBusinesses();

  const {
    isLoading: isRandomBusinessLoading,
    error: businessError,
    data: randomBusiness,
  } = getRandomBusiness();

  return (
    <>
      <h1>URL: {url}</h1>
      <div>
        {isRandomBusinessLoading && <p>Loading Random Business</p>}
        {businessError && <p>Error in loading random business</p>}
        {randomBusiness && (
          <>
            <h3>Trending Business</h3>
            {JSON.stringify(randomBusiness)}
          </>
        )}
      </div>
      <hr />
      <div>
        {isAllBusinessesLoading && <p>Loading all businesses</p>}
        {businessesError && <p>Error in loading all businesses</p>}
        {businesses && (
          <>
            <h3>All Businesses</h3>
            {businesses.map(b => (
              <p key={b.url}>{JSON.stringify(b)}</p>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default App;
