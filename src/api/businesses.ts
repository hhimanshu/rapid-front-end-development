import { useQuery } from 'react-query';
import { url } from './constants';
import { Business, Businesses } from '../shared/lib/types';

// todo: make extracting of data typesafe
export const getBusinesses = () =>
  useQuery<Businesses, Error>('businesses', () =>
    fetch(`${url}/businesses`).then(res => res.json())
  );

export const getRandomBusiness = () =>
  useQuery<Business, Error>('randomBusiness', () =>
    fetch(`${url}/business/random`).then(res => res.json())
  );
