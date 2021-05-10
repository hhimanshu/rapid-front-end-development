import { getBusinesses, getRandomBusiness } from '../api/businesses';
import { url } from '../api/constants';
import * as React from 'react';

export const BusinessContainer = () => {
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
            <h3>Random Business</h3>
            <div role={'group'}>{JSON.stringify(randomBusiness)}</div>
          </>
        )}
      </div>
      <hr />
      <div>
        {isAllBusinessesLoading && <p>Loading all businesses</p>}
        {businessesError && <p>Error in loading all businesses</p>}
        {businesses && (
          <div role={'group'}>
            <h3>All Businesses</h3>
            {businesses.map(b => (
              <p key={b.url}>{JSON.stringify(b)}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
