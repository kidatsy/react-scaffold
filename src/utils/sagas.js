import {
  all,
  fork,
  takeEvery,
} from 'redux-saga/effects';

export const combineSagas = sagas => function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
};

export const combineActionHandlers = actionHandlerArray => combineSagas(
  actionHandlerArray.map(([actionSelector, handler]) => function* applyHandler() {
    yield takeEvery(actionSelector, handler);
  }),
);
