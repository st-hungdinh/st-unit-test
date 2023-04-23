import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

export const UserDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())
  });

  if (isError) {
    return <div>Get user detail failed.</div>;
  }

  return (
    <div>
      <div className='detail-header'>
        <h2>User Detail</h2>
        <Link to='/users'>
          <button>Back to Users</button>
        </Link>
      </div>

      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div className='card'>
          <div className='card-header'>
            <h2>{data?.name}</h2>
          </div>
          <div className='card-body'>
            <p>Username: {data?.username}</p>
            <p>Email: {data?.email}</p>
            <p>Phone: {data?.phone}</p>
            <p>Website: {data?.website}</p>
            <p>
              Address:{' '}
              {[data?.address.street, data?.address.suite, data?.address.city, data?.address.zipcode].join(', ')}
            </p>
            <p>Company: {[data?.company.name, data?.company.catchPhrase, data?.company.bs].join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};
