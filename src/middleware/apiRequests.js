import {
  isOriginalRequestAction,
  createRequestedAction,
} from 'utils/apiRequests';

const transformApiRequest = store => next => action => {
  if (isOriginalRequestAction(action)) {
    return store.dispatch(createRequestedAction(action));
  }
  return next(action);
};

export default transformApiRequest;
