import { useQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { Users } from '../pages/users';
import { usersDataMock } from './data/users';
import wrapper from './setup/wrapper';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn()
}));

jest.mock('zustand', () => ({
  ...jest.requireActual('zustand'),
  useStore: jest.fn()
}));

describe('Test Users page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Users page', () => {
    const useQueryMock = jest.fn(() => () => ({
      queryKey: ['users'],
      queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
    }));
    (useQuery as jest.Mock).mockImplementation(useQueryMock);

    render(<Users />, { wrapper: wrapper });

    expect(useQueryMock).toHaveBeenCalledWith({
      queryKey: ['users'],
      queryFn: expect.any(Function)
    });
    expect(screen.getByText('Users list')).toBeInTheDocument();
    expect(screen.getByText('Back to home')).toBeInTheDocument();
  });

  it('should render loading', async () => {
    const useQueryMock = jest.fn(() => ({
      data: null,
      isLoading: true,
      isError: false
    }));
    (useQuery as jest.Mock).mockImplementation(useQueryMock);

    render(<Users />, { wrapper: wrapper });

    expect(useQueryMock).toHaveBeenCalledWith({
      queryKey: ['users'],
      queryFn: expect.any(Function)
    });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the users list', async () => {
    const useQueryMock = jest.fn(() => ({
      data: usersDataMock,
      isLoading: false,
      isError: false
    }));
    (useQuery as jest.Mock).mockImplementation(useQueryMock);

    render(<Users />, { wrapper: wrapper });

    expect(useQueryMock).toHaveBeenCalledWith({
      queryKey: ['users'],
      queryFn: expect.any(Function)
    });
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
  });
});
