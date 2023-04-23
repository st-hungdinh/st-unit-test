import { useQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { UserDetail } from '../pages/userDetail';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json({ id, name: `User ${id}` }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn()
}));

describe('UserDetail', () => {
  it('renders user data when loaded', async () => {
    (useQuery as jest.Mock).mockReturnValueOnce({
      data: {
        id: '1',
        name: 'User 1',
        username: 'user1',
        email: 'user1@example.com',
        phone: '123-456-7890',
        website: 'example.com',
        address: { street: '123 Main St', suite: 'Apt 1', city: 'Some City', zipcode: '12345' },
        company: { name: 'Acme Corp', catchPhrase: 'Lorem ipsum', bs: 'Dolor sit amet' }
      },
      isLoading: false
    });

    render(
      <MemoryRouter initialEntries={['/users/1']}>
        <UserDetail />
      </MemoryRouter>
    );

    expect(screen.getByText('User Detail')).toBeInTheDocument();
    expect(screen.getByText('Back to Users')).toBeInTheDocument();

    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('Username: user1')).toBeInTheDocument();
    expect(screen.getByText('Email: user1@example.com')).toBeInTheDocument();
    expect(screen.getByText('Phone: 123-456-7890')).toBeInTheDocument();
    expect(screen.getByText('Website: example.com')).toBeInTheDocument();
    expect(screen.getByText('Address: 123 Main St, Apt 1, Some City, 12345')).toBeInTheDocument();
    expect(screen.getByText('Company: Acme Corp, Lorem ipsum, Dolor sit amet')).toBeInTheDocument();
  });

  it('renders loading indicator while loading', async () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ isLoading: true });

    render(
      <MemoryRouter initialEntries={['/users/1']}>
        <UserDetail />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading....')).toBeInTheDocument();
  });
});
