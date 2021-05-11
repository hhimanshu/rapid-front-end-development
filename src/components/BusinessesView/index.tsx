import React from 'react';
import { Business, Businesses } from '../../shared/lib/types';
import { Box } from '@chakra-ui/react';
import { url } from '../../api/constants';

interface BusinessesProp {
  businesses: {
    isLoading: boolean;
    error?: Error;
    data: Businesses;
  };
  randomBusiness: {
    isLoading: boolean;
    error?: Error;
    data: Business;
  };
}

export const BusinessesView = ({
  businesses,
  randomBusiness,
}: BusinessesProp): JSX.Element => {
  return (
    <Box>
      <h1>URL: {url}</h1>
      <div>
        {randomBusiness.isLoading && <p>Loading Random Business</p>}
        {randomBusiness.error && <p>Error in loading random business</p>}
        {randomBusiness.data && (
          <>
            <h3>Random Business</h3>
            <div role={'group'}>{JSON.stringify(randomBusiness.data)}</div>
          </>
        )}
      </div>
      <hr />
      <div>
        {businesses.isLoading && <p>Loading all businesses</p>}
        {businesses.error && <p>Error in loading all businesses</p>}
        {businesses.data && (
          <div role={'group'}>
            <h3>All Businesses</h3>
            {businesses.data.map(b => (
              <p key={b.url}>{JSON.stringify(b)}</p>
            ))}
          </div>
        )}
      </div>
    </Box>
  );
};
