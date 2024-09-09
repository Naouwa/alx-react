import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});
