import { pick } from 'lodash';
import { put } from 'redux-saga/effects';
import { USERS_FETCHED } from 'actionTypes/users';
import {
  hasSucceeded,
  createNormalizedAction,
} from 'utils/actions';
import { normalizeData } from 'utils/normalizer';
import { combineActionHandlers } from 'utils/sagas';

function* normalize(action) {
  const normalizedData = normalizeData(action.response.data.results, 'users');
  yield put(createNormalizedAction(pick(action , ['type']), normalizedData.result));
}

export default combineActionHandlers([
  [hasSucceeded(USERS_FETCHED), normalize],
]);
