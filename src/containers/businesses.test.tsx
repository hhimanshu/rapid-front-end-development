import { render, screen } from '@testing-library/react';
import React from 'react';
import { getBusinesses } from '../api/businesses';
import { businesses as businessesData } from '../mocks/data/businesses/all';
import { BusinessesContainer } from './businesses';

describe('Test App Component', () => {
  it('should display businesses', () => {
    // mock react-query call & return fetch output from mocked data
    const businesses = require('../api/businesses');
    const getBusinessesMock = jest.spyOn(businesses, 'getBusinesses');
    const randomBusinessMock = jest.spyOn(businesses, 'getRandomBusiness');

    let allBusinesses = businessesData;
    getBusinessesMock.mockImplementation(() => {
      return { isLoading: false, data: allBusinesses };
    });
    randomBusinessMock.mockImplementation(() => {
      return { isLoading: false, data: allBusinesses[0] };
    });

    render(<BusinessesContainer />);

    {
      const groups = screen.getAllByRole('group');
      expect(groups).toHaveLength(1);
      expect(groups[0].children).toHaveLength(50); // 50 businesses
    }
  });
});
