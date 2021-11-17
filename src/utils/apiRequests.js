import {
  API_REQUEST_SUFFIX_REQUESTED,
  API_REQUEST_SUFFIX_SUCCEEDED,
  API_REQUEST_SUFFIX_FAILED,
  API_REQUEST_SUFFIXES,
} from 'constants/apiRequests';

const modifyActionType = (action, requestSuffix, additionalData = {}) => {
  // TODO: Use a regex to do this removal
  const strippedActionType = API_REQUEST_SUFFIXES.reduce((currentType, suffix) => {
    const typePieces = currentType.split('_');
    if (typePieces[typePieces.length - 1] === suffix) {
      return typePieces.slice(0, -1).join('_');
    }
    return currentType;
  }, action.type);

  return {
    ...action,
    type: `${strippedActionType}_${requestSuffix}`,
    ...additionalData,
  };
};

export const createRequestedAction = (action) => modifyActionType(action, API_REQUEST_SUFFIX_REQUESTED);
export const createSucceededAction = (action, response) => modifyActionType(action, API_REQUEST_SUFFIX_SUCCEEDED, { response });
export const createFailedAction = (action, error) => modifyActionType(action, API_REQUEST_SUFFIX_FAILED, { error });

export const isOriginalRequestAction = action => action.request && !API_REQUEST_SUFFIXES.some(apiRequestSuffix => action.type.endsWith(`_${apiRequestSuffix}`));
export const isRequestedAction = action => action.request && action.type.endsWith(`_${API_REQUEST_SUFFIX_REQUESTED}`);
export const isSucceededAction = action => action.request && action.type.endsWith(`_${API_REQUEST_SUFFIX_SUCCEEDED}`);
export const isFailedAction = action => action.request && action.type.endsWith(`_${API_REQUEST_SUFFIX_FAILED}`);
