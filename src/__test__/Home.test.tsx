import { render, screen } from '@testing-library/react';
import { Home } from '../pages/home';
import wrapper from './setup/wrapper';

describe('Test Home page', () => {
  beforeEach(() => {
    render(<Home />, { wrapper });
  });

  it('should render home page', () => {
    const title = screen.getByText(/React/i);
    expect(title).toBeInTheDocument();
  });

  it('should render button with link', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Explore Users List');
    expect(link).toHaveAttribute('href', '/users');
  });
});
