import { USERS_FETCHED } from 'actionTypes/users';
import api from 'api';

export const fetchUsers = () => ({
  type: USERS_FETCHED,
  request: api.users.getUsers(),
});
