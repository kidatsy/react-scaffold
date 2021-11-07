// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import sagas from './sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(
    sagaMiddleware,
  );

  const composeFunction = process.env.NODE_ENV === 'production'
    ? compose : composeWithDevTools;
  const composedEnhancers = composeFunction(
    middlewareEnhancer,
  );

  const store = createStore(rootReducer, composedEnhancers);
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
