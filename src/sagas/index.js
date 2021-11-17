import { combineSagas } from 'utils/sagas';
import apiRequests from './apiRequests';

export default combineSagas([
  apiRequests,
]);
