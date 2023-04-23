import { useQuery } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserDetail } from '../pages/userDetail';
import { usersDataMock } from './data/users';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn()
}));

describe('Test User Detail component', () => {
  it('Should render the user detail page', () => {
    (useQuery as jest.Mock).mockReturnValueOnce({
      data: null,
      isLoading: true
    });

    render(
      <MemoryRouter initialEntries={['/users/1']}>
        <UserDetail />
      </MemoryRouter>
    );

    expect(screen.getByText('User Detail')).toBeInTheDocument();
    expect(screen.getByText('Back to Users')).toBeInTheDocument();
  });

  it('should render loading', async () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ isLoading: true });

    render(
      <MemoryRouter initialEntries={['/users/1']}>
        <UserDetail />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading....')).toBeInTheDocument();
  });

  it('should render user data', async () => {
    const userMock = usersDataMock[0];

    (useQuery as jest.Mock).mockReturnValueOnce({
      data: userMock,
      isLoading: false
    });

    render(
      <MemoryRouter initialEntries={[`/users/${userMock.id}`]}>
        <UserDetail />
      </MemoryRouter>
    );

    expect(screen.getByText(userMock.name)).toBeInTheDocument();
  });

  it('should render error', async () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ isError: true });

    render(
      <MemoryRouter initialEntries={['/users/1']}>
        <UserDetail />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Get user detail failed.')).toBeInTheDocument();
    });
  });
});
