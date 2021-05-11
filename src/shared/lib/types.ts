export interface Business {
  name: string;
  url: string;
  phone: string;
  categories: [Category];
  location: Location;
  hours: [HoursType];
}

export type Businesses = [Business];

export interface Category {
  title: string;
}

export interface Location {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  postal_code: string;
}

export interface HoursType {
  hours_type: string;
}
