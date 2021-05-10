import { getBusinesses, getRandomBusiness } from '../api/businesses';
import * as React from 'react';
import { BusinessesView } from '../components/BusinessesView';

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
    <BusinessesView
      businesses={{
        isLoading: isAllBusinessesLoading,
        error: businessesError,
        data: businesses,
      }}
      randomBusiness={{
        isLoading: isRandomBusinessLoading,
        error: businessError,
        data: randomBusiness,
      }}
    />
  );
};
