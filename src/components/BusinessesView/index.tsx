import React from 'react';
import { Business, Businesses } from '../../shared/lib/types';
import { Box } from '@chakra-ui/react';

interface BusinessesProp {
  businesses: Businesses;
  randomBusiness: Business;
}

export const BusinessesView = ({
  businesses,
  randomBusiness,
}: BusinessesProp): JSX.Element => {
  return <Box>Coming Soon!</Box>;
};
