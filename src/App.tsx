import React from 'react';
import { Box } from '@chakra-ui/react';
import { BusinessesContainer } from './containers/businesses';
import { ApiStatus } from './containers/apiStatus';

export const App = () => {
  return (
    <Box mx={48} my={24}>
      <ApiStatus />
      <BusinessesContainer />
    </Box>
  );
};
