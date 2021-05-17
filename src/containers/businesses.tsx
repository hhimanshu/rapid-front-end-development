import * as React from 'react';
import { BusinessesView } from '../components/BusinessesView';
import {
  useGetApiBusinesses,
  useGetApiBusinessRandom,
} from '../openapi/generated/default/default';
import { Business, Businesses } from '../shared/lib/types';

export const BusinessesContainer = () => {
  const {
    isLoading: isAllBusinessesLoading,
    error: businessesError,
    data: businesses,
  } = useGetApiBusinesses();

  const {
    isLoading: isRandomBusinessLoading,
    error: businessError,
    data: randomBusiness,
  } = useGetApiBusinessRandom();
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
