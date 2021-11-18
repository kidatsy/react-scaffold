import { combineSagas } from 'utils/sagas';
import apiRequests from './apiRequests';
import users from './users';

export default combineSagas([
  apiRequests,
  users,
]);
