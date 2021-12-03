import { useDispatch } from 'react-redux';
import { fetchUsers } from 'actions/users';

const HelloWorld = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>Hello World</h2>
      <p>Congratulations, you boostrapped into React without all the bloat of CRA!</p>
    </div>
  );
};

export default HelloWorld;
