import React from 'react';
import { Business, Businesses } from '../../shared/lib/types';
import {
  Box,
  Link,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { url } from '../../api/constants';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { printLocation } from '../../shared/utility';

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
    {data && <DisplayTable rows={data} />}
  </div>
);

const ShowRandomBusiness = ({ isLoading, error, data }: RandomBusinessProp) => (
  <div>
    {isLoading && <p>Loading Random Business</p>}
    {error && <p>Error in loading random business</p>}
    {data && <DisplayTable rows={[data]} hideFooter />}
  </div>
);

interface DisplayTableProps {
  rows: [Omit<Business, 'hours'>];
  hideFooter?: boolean;
}

const DisplayTable = ({ rows, hideFooter = false }: DisplayTableProps) => (
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Phone</Th>
        <Th>Location</Th>
        <Th>Categories</Th>
      </Tr>
    </Thead>
    <Tbody role={'group'}>
      {rows.map(row => (
        <Tr key={row.url}>
          <Td>
            <Link href={row.url} isExternal>
              {row.name} <ExternalLinkIcon mx={'2px'} />
            </Link>
          </Td>
          <Td>{row.phone}</Td>
          <Td>{printLocation(row.location)}</Td>
          <Td>{row.categories.map(c => c.title).join(', ')}</Td>
        </Tr>
      ))}
    </Tbody>
    {!hideFooter && (
      <Tfoot>
        <Tr>
          <Th>Name</Th>
          <Th>Phone</Th>
          <Th>Location</Th>
          <Th>Categories</Th>
        </Tr>
      </Tfoot>
    )}
  </Table>
);
