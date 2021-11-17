// @flow
import * as React from 'react'; // TODO (TC): Figure out how to just use ProvidePlugin w/o this explicit import https://github.com/facebook/flow/issues/4280
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'actions/users';

const HelloWorld = (): React.Node => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

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
