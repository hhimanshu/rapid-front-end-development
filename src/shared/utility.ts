import { Location } from './lib/types';

export const printLocation = (location: Location): string => {
  let result = location.address1;
  if (location.address2) result = `${result}, ${location.address2}`;
  if (location.address3) result = `${result}, ${location.address3}`;
  return `${result}, ${location.city}, ${location.state}, ${location.postal_code}`;
};
