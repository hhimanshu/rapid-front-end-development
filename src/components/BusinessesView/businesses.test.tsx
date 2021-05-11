import { render, screen } from '@testing-library/react';
import React from 'react';
import { BusinessesView } from './index';
import { Business, Businesses } from '../../shared/lib/types';
import { businesses as allBusinesses } from '../../mocks/data/businesses/all';

describe('Test App Component', () => {
  it('should display businesses when no error', () => {
    const all: Businesses = allBusinesses.data.search.business as Businesses;

    const businessesData = {
      isLoading: false,
      data: all.slice(0, 10) as Businesses,
    };

    const randomBusinessData = {
      isLoading: false,
      data: all[0] as Business,
    };

    const { container } = render(
      <BusinessesView
        businesses={businessesData}
        randomBusiness={randomBusinessData}
      />
    );

    {
      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(3);

      expect(headings[0].innerHTML).toContain('URL');
      expect(headings[1].innerHTML).toContain('Random Business');
      expect(headings[2].innerHTML).toContain('All Businesses');
    }
    {
      const groups = screen.getAllByRole('group');
      expect(groups).toHaveLength(2);
      expect(groups[0].innerHTML).toContain('url');
      expect(groups[1].children).toHaveLength(11); // 1 h3, 10 businesses
    }
  });
});
