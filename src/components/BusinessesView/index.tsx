import React from 'react';
import { Business, Businesses } from '../../shared/lib/types';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { url } from '../../api/constants';

interface BusinessProp {
  isLoading: boolean;
  error?: Error;
  data: Businesses;
}

interface RandomBusinessProp {
  isLoading: boolean;
  error?: Error;
  data: Business;
}

interface BusinessesProp {
  businesses: BusinessProp;
  randomBusiness: RandomBusinessProp;
}

export const BusinessesView = ({
  businesses,
  randomBusiness,
}: BusinessesProp): JSX.Element => {
  return (
    <Box>
      <h1>URL: {url}</h1>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>All Businesses</Tab>
          <Tab>Random Business</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ShowBusinesses {...businesses} />
          </TabPanel>
          <TabPanel>
            <ShowRandomBusiness {...randomBusiness} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const ShowBusinesses = ({ isLoading, error, data }: BusinessProp) => (
  <div>
    {isLoading && <p>Loading all businesses</p>}
    {error && <p>Error in loading all businesses</p>}
    {data && (
      <div role={'group'}>
        {data.map(b => (
          <p key={b.url}>{JSON.stringify(b)}</p>
        ))}
      </div>
    )}
  </div>
);

const ShowRandomBusiness = ({ isLoading, error, data }: RandomBusinessProp) => (
  <div>
    {isLoading && <p>Loading Random Business</p>}
    {error && <p>Error in loading random business</p>}
    {data && <div role={'group'}>{JSON.stringify(data)}</div>}
  </div>
);
