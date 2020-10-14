import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

describe('Sidebar', () => {
  test('renders without crashing', () => {
    const current = {
      current: {
        dt: 1602677859,
        humidity: 67,
        temp: 13.82,
        windSpeed: 5.7,
        precipitation: 0,
        weather: 'Clouds',
        city: 'London',
      },
    };

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Sidebar current={current} />
      </MemoryRouter>,
    );

    expect(getByText(/dashboard/i)).toBeInTheDocument();
    expect(getByText(/settings/i)).toBeInTheDocument();
  });
});
