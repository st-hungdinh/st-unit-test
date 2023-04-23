import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Link to={`users`}>
          <button>Explore Users List</button>
        </Link>
      </div>
    </div>
  );
};
