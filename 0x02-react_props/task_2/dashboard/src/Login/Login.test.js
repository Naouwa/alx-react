import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders without crashing', () => {
    render(<Login />);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });
});
