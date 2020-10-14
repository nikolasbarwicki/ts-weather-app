import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import WeatherForecast from '../components/WeatherForecast';

describe('WeatherForecast', () => {
  test('renders 7 divs with weather data', () => {
    const daily = [
      { dt: 1602759600, tempMax: 13.07, tempMin: 9.95, weather: 'Rain' },
      { dt: 1602846000, tempMax: 12.83, tempMin: 9.92, weather: 'Rain' },
      { dt: 1602932400, tempMax: 13.8, tempMin: 9.97, weather: 'Clouds' },
      { dt: 1603018800, tempMax: 12.73, tempMin: 10.74, weather: 'Clouds' },
      { dt: 1603105200, tempMax: 13.99, tempMin: 11.23, weather: 'Clouds' },
      { dt: 1603191600, tempMax: 12.49, tempMin: 9.34, weather: 'Clear' },
      { dt: 1603278000, tempMax: 11.54, tempMin: 8.2, weather: 'Clouds' },
    ];

    const { getAllByRole } = render(<WeatherForecast daily={daily} />);

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(7);
  });
});
