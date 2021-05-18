/*
 * Generated by orval v5.3.0 🍺
 * Do not edit manually.
 * Businesses API
 * Information about businesses
 * OpenAPI spec version: 0.0.1
 */
import axios,{
  AxiosRequestConfig
} from 'axios'
import {
  useQuery,
  UseQueryOptions
} from 'react-query'
import type {
  Businesses
} from './model/schema-businesses'
import type {
  Business
} from './model/schema-business'
import {
  rest
} from 'msw'
import faker from 'faker'


type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


export const getBusinesses = <Data = unknown>(
     options?: AxiosRequestConfig
 ) => {
    return axios.get<Data extends unknown ? Businesses : Data>(
      `/businesses`,options
    );
  }


export const getGetBusinessesQueryKey = () => [`/businesses`]

    
export const useGetBusinesses = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
  options?: { query?:UseQueryOptions<AsyncReturnType<typeof getBusinesses>, Error>, axios?: AxiosRequestConfig}

  ) => {
  const queryKey = getGetBusinessesQueryKey();
  const {query: queryOptions, axios: axiosOptions} = options || {}

  const query = useQuery<AsyncReturnType<typeof getBusinesses>, Error>(queryKey, () => getBusinesses<Data>(axiosOptions), queryOptions )

  return {
    queryKey,
    ...query
  }
}

export const getBusinessRandom = <Data = unknown>(
     options?: AxiosRequestConfig
 ) => {
    return axios.get<Data extends unknown ? Business : Data>(
      `/business/random`,options
    );
  }


export const getGetBusinessRandomQueryKey = () => [`/business/random`]

    
export const useGetBusinessRandom = <
  Data extends unknown = unknown,
  Error extends unknown = unknown
>(
  options?: { query?:UseQueryOptions<AsyncReturnType<typeof getBusinessRandom>, Error>, axios?: AxiosRequestConfig}

  ) => {
  const queryKey = getGetBusinessRandomQueryKey();
  const {query: queryOptions, axios: axiosOptions} = options || {}

  const query = useQuery<AsyncReturnType<typeof getBusinessRandom>, Error>(queryKey, () => getBusinessRandom<Data>(axiosOptions), queryOptions )

  return {
    queryKey,
    ...query
  }
}



export const getGetBusinessesMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({name: faker.helpers.randomize([faker.random.word(), undefined]), url: faker.helpers.randomize([faker.random.word(), undefined]), categories: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({title: faker.helpers.randomize([faker.random.word(), undefined])})), undefined]), location: faker.helpers.randomize([{address1: faker.helpers.randomize([faker.random.word(), undefined]), address2: faker.helpers.randomize([faker.random.word(), undefined]), address3: faker.helpers.randomize([faker.random.word(), undefined]), city: faker.helpers.randomize([faker.random.word(), undefined]), state: faker.helpers.randomize([faker.random.word(), undefined]), postal_code: faker.helpers.randomize([faker.random.word(), undefined])}, undefined]), hours: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({hours_type: faker.helpers.randomize([faker.random.word(), undefined])})), undefined])})))

export const getGetBusinessRandomMock = () => ({name: faker.helpers.randomize([faker.random.word(), undefined]), url: faker.helpers.randomize([faker.random.word(), undefined]), categories: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({title: faker.helpers.randomize([faker.random.word(), undefined])})), undefined]), location: faker.helpers.randomize([{address1: faker.helpers.randomize([faker.random.word(), undefined]), address2: faker.helpers.randomize([faker.random.word(), undefined]), address3: faker.helpers.randomize([faker.random.word(), undefined]), city: faker.helpers.randomize([faker.random.word(), undefined]), state: faker.helpers.randomize([faker.random.word(), undefined]), postal_code: faker.helpers.randomize([faker.random.word(), undefined])}, undefined]), hours: faker.helpers.randomize([[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({hours_type: faker.helpers.randomize([faker.random.word(), undefined])})), undefined])})

export const getBusinessesAPIMSW = () => [
rest.get('*/businesses', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetBusinessesMock()),
        )
      }),rest.get('*/business/random', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetBusinessRandomMock()),
        )
      }),]
