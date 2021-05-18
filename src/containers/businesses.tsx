import * as React from 'react';
import { BusinessesView } from '../components/BusinessesView';
import { useGetBusinesses, useGetBusinessRandom } from '../openapi/generated/';
import { Business, Businesses } from '../shared/lib/types';
import { url } from '../openapi/constants';

export const BusinessesContainer = () => {
  const {
    isLoading: isAllBusinessesLoading,
    error: businessesError,
    data: businesses,
  } = useGetBusinesses({ axios: { baseURL: url } });

  const {
    isLoading: isRandomBusinessLoading,
    error: businessError,
    data: randomBusiness,
  } = useGetBusinessRandom({ axios: { baseURL: url } });
  return (
    <BusinessesView
      businesses={{
        isLoading: isAllBusinessesLoading,
        error: businessesError as Error,
        data: businesses?.data as Businesses,
      }}
      randomBusiness={{
        isLoading: isRandomBusinessLoading,
        error: businessError as Error,
        data: randomBusiness?.data as Business,
      }}
    />
  );
};
