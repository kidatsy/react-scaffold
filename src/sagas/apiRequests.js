import { put, call } from 'redux-saga/effects';
import {
  isRequestedAction,
  isSucceededAction,
  isFailedAction,
  createSucceededAction,
  createFailedAction,
} from 'utils/actions';
import { combineActionHandlers } from 'utils/sagas';

function* handleRequestedActions(action) {
  try {
    const response = yield call([this, action.request]);
    yield put(createSucceededAction(action, response));
  } catch (error) {
    yield put(createFailedAction(action, error));
  }
}

function* handleSuccessActions(action) {
  // SETUP: This is here as an example. You'll most likely want to remove in real use
  console.log(action.response);
}

function* handleErrorActions(action) {
  // SETUP: Hook up your own error reporting tooling here
  console.log(action.error);
}

export default combineActionHandlers([
  [isRequestedAction, handleRequestedActions],
  [isSucceededAction, handleSuccessActions],
  [isFailedAction, handleErrorActions],
]);
