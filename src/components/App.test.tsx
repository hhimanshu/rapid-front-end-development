import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import sum from '../sum';

// @ts-ignore
global.fetch = jest.fn(() => Promise.resolve('OK'));

describe('A test', () => {
  it('2 + 2 = 4', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});

describe('Test App Component', () => {
  it('should display h1', () => {
    // mock react-query call since we are not testing it here
    const businesses = require('../api/businesses');
    const getBusinessesMock = jest.spyOn(businesses, 'getBusinesses');
    const randomBusinessMock = jest.spyOn(businesses, 'getRandomBusiness');
    getBusinessesMock.mockImplementation(() => []);
    randomBusinessMock.mockImplementation(() => []);

    render(<App />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length > 0);
    expect(headings[0].innerHTML).toContain('URL');
  });
});
