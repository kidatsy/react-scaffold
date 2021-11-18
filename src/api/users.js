import { get } from './methods/rest';

export default {
  getUsers: () => get('/people'),
};
