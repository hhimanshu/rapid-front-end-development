import { render, screen } from '@testing-library/react';
import React from 'react';
import { BusinessesView } from './index';
import { Business, Businesses } from '../../shared/lib/types';
import { businesses as allBusinesses } from '../../mocks/data/businesses/all';

describe('Test App Component', () => {
  it('should display businesses when no error', () => {
    const all: Businesses = allBusinesses as Businesses;

    const businessesData = {
      isLoading: false,
      data: all.slice(0, 10) as Businesses,
    };

    const randomBusinessData = {
      isLoading: false,
      data: all[0] as Business,
    };

    render(
      <BusinessesView
        businesses={businessesData}
        randomBusiness={randomBusinessData}
      />
    );

    {
      const groups = screen.getAllByRole('group');
      expect(groups).toHaveLength(1);
      expect(groups[0].children).toHaveLength(10); //10 businesses
    }
  });
});
