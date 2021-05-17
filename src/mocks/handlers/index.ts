import { AUTH_HANDLERS } from './auth';
import { BUSINESS_HANDLERS } from './businesses';
// import { getDefaultMSW } from '../../openapi/generated/default/default.msw';

export const handlers = [...AUTH_HANDLERS, ...BUSINESS_HANDLERS];

/**
 * The fake data from orval is not qualitative, and complete for the needs
 * of our application. When I say complete, it misses the fields necessary for us to see the data.
 * I prefer to take control of the mocked data so that when working, the
 * data is closer to the domain. Hence I will comment the following line,
 * and continue to use the mocked data prepared by myself.
 * The following line gives an example on how to use faker data with MSW when using orval.
 */
// export const handlers = [...getDefaultMSW()];
