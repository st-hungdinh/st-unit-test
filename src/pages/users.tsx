import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { UsersList } from '../components/usersList';
import { useEffect } from 'react';
import { usersStore } from '../stores/users';

export const Users = () => {
  const setUsers = usersStore((state: any) => state.setUsers);

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
  });

  useEffect(() => {
    data && setUsers(data);
  }, [data, setUsers]);

  return (
    <div>
      <div className='list-header'>
        <h2>Users list</h2>
        <Link to={`/`}>
          <button>Back to home</button>
        </Link>
      </div>
      <div className='list-table'>{isLoading || !data ? 'Loading...' : <UsersList />}</div>
    </div>
  );
};
