import { all, fork } from 'redux-saga/effects';

export const combineSagas = (sagas) => function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
};
