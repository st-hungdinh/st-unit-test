import { render, screen } from '@testing-library/react';
import { UsersList } from '../../components/usersList';
import { usersStore } from '../../stores/users';
import { usersDataMock } from '../data/users';
import wrapper from '../setup/wrapper';

jest.mock('../../stores/users', () => ({
  usersStore: jest.fn().mockReturnValue({
    users: null,
    setUsers: jest.fn()
  })
}));

describe('Test Users List component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Users List component', () => {
    render(<UsersList />, { wrapper: wrapper });

    expect(screen.getByTestId('data-table')).toBeInTheDocument();
    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Website')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
  });

  it('should render a table with no user data', () => {
    const userStoreMock = (usersStore as unknown as jest.Mock).mockReturnValue([]);

    render(<UsersList />, { wrapper: wrapper });

    expect(userStoreMock).toHaveBeenCalled();
    expect(screen.getByText('No users')).toBeInTheDocument();
  });

  it('should render a table with user data', () => {
    const userStoreMock = (usersStore as unknown as jest.Mock).mockReturnValue(usersDataMock);

    render(<UsersList />, { wrapper: wrapper });

    expect(userStoreMock).toHaveBeenCalled();
    usersDataMock.forEach((user) => {
      expect(screen.getByText(user.id.toString())).toBeInTheDocument();
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.username)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.address.street)).toBeInTheDocument();
      expect(screen.getByText(user.phone)).toBeInTheDocument();
      expect(screen.getByText(user.website)).toBeInTheDocument();
      expect(screen.getByText(user.company.name)).toBeInTheDocument();
    });
  });

  it('should render a table with user data and action button', () => {
    const userStoreMock = (usersStore as unknown as jest.Mock).mockReturnValue(usersDataMock);

    render(<UsersList />, { wrapper: wrapper });

    expect(userStoreMock).toHaveBeenCalled();
    expect(screen.getAllByText('View')).toHaveLength(usersDataMock.length);
    expect(screen.getAllByText('Delete')).toHaveLength(usersDataMock.length);
  });

  it('should render a table with user data removed by user', () => {
    const mockedSetUsers = jest.fn();

    (usersStore as unknown as jest.Mock).mockReturnValueOnce(usersDataMock);
    const setUsersMock = (usersStore as unknown as jest.Mock).mockReturnValueOnce(mockedSetUsers);

    render(<UsersList />, { wrapper: wrapper });

    const deleteButton = screen.getByTestId(`btn-${usersDataMock[0].id}`);
    deleteButton.click();

    expect(setUsersMock).toHaveBeenCalled();
    expect(mockedSetUsers).toHaveBeenCalledWith([usersDataMock[1]]);

    // const userRow = screen.queryByTestId(usersDataMock[1].id.toString());
    // expect(userRow).not.toBeInTheDocument();
    // expect(setUsersMock).toHaveBeenCalledWith([usersDataMock[1]]);
  });
});
