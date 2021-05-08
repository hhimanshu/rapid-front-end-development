import { AUTH_HANDLERS } from './auth';
import { BUSINESS_HANDLERS } from './businesses';

export const handlers = [...AUTH_HANDLERS, ...BUSINESS_HANDLERS];
