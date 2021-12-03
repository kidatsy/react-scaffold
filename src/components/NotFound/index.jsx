import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>That's a 404!</p>
      <p>Go Back <Link to='/'>home</Link></p>
    </div>
  );
};

export default NotFound;
