import { USERS_FETCHED } from 'actionTypes/users';
import { hasNormalized } from 'utils/actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case hasNormalized(USERS_FETCHED):
      return action.data;
    default:
      return state;
  }
};
