import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

it('renders a spinner', () => {
  render(<Spinner />);
  const element = screen.getByRole('status');
  expect(element).toBeInTheDocument();
});
