import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders without crashing', () => {
  render(<Header />);
  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
});
