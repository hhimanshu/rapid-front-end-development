import { render, screen } from '@testing-library/react';
import React from 'react';
import sum from '../sum';
import { getBusinesses } from '../api/businesses';
import { businesses as businessesData } from '../mocks/data/businesses/all';
import { BusinessContainer } from './businesses';

describe('A test', () => {
  it('2 + 2 = 4', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});

describe('Test App Component', () => {
  it('should display businesses', () => {
    // mock react-query call & return fetch output from mocked data
    const businesses = require('../api/businesses');
    const getBusinessesMock = jest.spyOn(businesses, 'getBusinesses');
    const randomBusinessMock = jest.spyOn(businesses, 'getRandomBusiness');

    let allBusinesses = businessesData.data.search.business;
    getBusinessesMock.mockImplementation(() => {
      return { isLoading: false, data: allBusinesses };
    });
    randomBusinessMock.mockImplementation(() => {
      return { isLoading: false, data: allBusinesses[0] };
    });

    render(<BusinessContainer />);

    {
      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(3);

      expect(headings[0].innerHTML).toContain('URL');
      console.log(headings[0].innerHTML);
      expect(headings[1].innerHTML).toContain('Random Business');
      expect(headings[2].innerHTML).toContain('All Businesses');
    }
    {
      const groups = screen.getAllByRole('group');
      expect(groups).toHaveLength(2);
      expect(groups[0].innerHTML).toContain('url');
      expect(groups[1].children).toHaveLength(51); // 1 h3, 50 businesses
    }
  });
});
