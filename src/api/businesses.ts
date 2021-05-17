import { useQuery } from 'react-query';
import { url } from './constants';
import { Business, Businesses } from '../shared/lib/types';

export const getBusinesses = () =>
  useQuery<Businesses, Error>('businesses', () =>
    fetch(`${url}/businesses`).then(res => res.json())
  );

export const getRandomBusiness = () =>
  useQuery<Business, Error>('randomBusiness', () =>
    api.businessRandomGet().then(d => d as Business)
  );
