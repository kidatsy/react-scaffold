import { all, fork } from 'redux-saga/effects';
// import sagas from the local folder here

const combineSagas = (sagas) => function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
};

export default combineSagas([]);
