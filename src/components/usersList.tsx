import { Link } from 'react-router-dom';
import { usersStore } from '../stores/users';

export const UsersList = () => {
  const users = usersStore((state: any) => state.users);
  const setUsers = usersStore((state: any) => state.setUsers);

  const handleDeleteUser = (id: string) => {
    const updatedUsers = users.filter((user: any) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>
                <div className='item-action'>
                  <Link to={`${user.id}`}>
                    <button className='btn-info'>View</button>
                  </Link>
                  <button className='btn-danger' onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
