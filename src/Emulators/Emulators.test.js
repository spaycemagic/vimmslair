import { render, screen } from '@testing-library/react';
import Emulators from './Emulators/Emulators';

test('renders learn react link', () => {
  render(<Emulators />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
