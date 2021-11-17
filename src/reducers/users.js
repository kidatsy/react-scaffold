import { USERS_FETCHED } from 'actionTypes/users';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_FETCHED:
    default:
      return state;
  }
};
