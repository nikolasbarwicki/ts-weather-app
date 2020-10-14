import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import SidebarWidget from '../components/SidebarWidget';

describe('SidebarWidget', () => {
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

    const { getByText } = render(<SidebarWidget current={current} />);

    expect(getByText(/today/i)).toBeInTheDocument();
    expect(getByText(/humidity/i)).toBeInTheDocument();
  });
});
