import { render, screen } from '@testing-library/react';
import Button from '../form/button';

it('renders a button', () => {
  render(<Button>Login Button</Button>);
  const element = screen.getByText('Login Button');
  expect(element).toBeInTheDocument();
});
