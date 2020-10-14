import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Settings from '../components/Settings';

describe('Settings', () => {
  test('disable "set city" button if there are no coords', () => {
    const { getByText } = render(<Settings />);

    expect(getByText(/set city/i)).toBeDisabled();
  });
});
