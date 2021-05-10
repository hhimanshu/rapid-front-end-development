import { useQuery } from 'react-query';
import { url } from './constants';
import { Businesses } from '../shared/lib/types';

// todo: make extracting of data typesafe
export const getAllBusinesses = () =>
  useQuery<Businesses, Error>('allBusinesses', () =>
    fetch(`${url}/businesses`)
      .then(res => res.json())
      .then(body => body.data.search.business)
  );
