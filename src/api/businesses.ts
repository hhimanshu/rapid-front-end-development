import { useQuery } from 'react-query';
import { url } from './constants';
import { Business, Businesses } from '../shared/lib/types';
import { Configuration, DefaultApi } from '../openapi/generated';

const api = new DefaultApi(new Configuration({ basePath: url }));

export const getBusinesses = () =>
  useQuery<Businesses, Error>('businesses', () =>
    api.businessesGet().then(d => d as Businesses)
  );

export const getRandomBusiness = () =>
  useQuery<Business, Error>('randomBusiness', () =>
    api.businessRandomGet().then(d => d as Business)
  );
