import { rest } from 'msw';
import { businesses } from '../data/businesses/all';
import { url } from '../../openapi/constants';

export const BUSINESS_HANDLERS = [
  rest.get(`${url}/businesses`, (req, res, context) => {
    return res(context.status(200), context.json(businesses));
  }),

  rest.get(`${url}/business/random`, (req, res, context) => {
    const allBusinesses = businesses;
    const randomIndex = Math.floor(Math.random() * allBusinesses.length) + 1;
    return res(context.status(200), context.json(allBusinesses[randomIndex]));
  }),
];
