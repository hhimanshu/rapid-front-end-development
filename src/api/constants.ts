export const isHostLocal: boolean = new Set<string>([
  'development',
  'test',
]).has(process.env.NODE_ENV);
const isHostStaged: boolean = process.env.NODE_ENV === 'staging';
export const isHostProduction: boolean = process.env.NODE_ENV === 'production';

const hostName = isHostLocal
  ? ''
  : isHostStaged
  ? // to demonstrate that you can have multiple different locations where API is hosted
    ''
  : 'https://listbusinesses.vercel.app';

export const url = `${hostName}/api`;

export type BusinessRoutes = 'businesses' | 'randomBusiness';

export const Routes: Map<BusinessRoutes, string> = new Map<
  BusinessRoutes,
  string
>();
Routes.set('businesses', '/businesses');
Routes.set('randomBusiness', '/business/random');
