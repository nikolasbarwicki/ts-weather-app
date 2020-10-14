import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
  });

  test('Nav redirects to home page', () => {
    fireEvent.click(screen.getByText(/dashboard/i));
    expect(screen.getByText(/weather forecast/i)).toBeInTheDocument();
  });

  test('Nav redirects to settings page', () => {
    const { getByText } = within(screen.getByRole('navigation'));
    const link = getByText(/settings/i);
    fireEvent.click(link);
    expect(screen.getByText(/add your city/i)).toBeInTheDocument();
  });
});
