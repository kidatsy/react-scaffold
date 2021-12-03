import {
  ACTION_SUFFIX_REQUESTED,
  ACTION_SUFFIX_SUCCEEDED,
  ACTION_SUFFIX_FAILED,
  ACTION_SUFFIX_NORMALIZED,
  ACTION_SUFFIXES,
} from 'constants/actions';

const modifyActionType = (action, requestSuffix, additionalData = {}) => {
  // TODO: Use a regex to do this removal
  const strippedActionType = ACTION_SUFFIXES.reduce((currentType, suffix) => {
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

export const createRequestedAction = action => modifyActionType(action, ACTION_SUFFIX_REQUESTED);
export const createSucceededAction = (action, response) => modifyActionType(action, ACTION_SUFFIX_SUCCEEDED, { response });
export const createFailedAction = (action, error) => modifyActionType(action, ACTION_SUFFIX_FAILED, { error });
export const createNormalizedAction = (action, data) => modifyActionType(action, ACTION_SUFFIX_NORMALIZED, { data });

export const isOriginalRequestAction = action => action.request && !ACTION_SUFFIXES.some(apiRequestSuffix => action.type.endsWith(`_${apiRequestSuffix}`));
export const isRequestedAction = action => action.request && action.type.endsWith(`_${ACTION_SUFFIX_REQUESTED}`);
export const isSucceededAction = action => action.request && action.type.endsWith(`_${ACTION_SUFFIX_SUCCEEDED}`);
export const isFailedAction = action => action.request && action.type.endsWith(`_${ACTION_SUFFIX_FAILED}`);
export const isNormalizedAction = action => action.type.endsWith(`_${ACTION_SUFFIX_NORMALIZED}`);

export const hasRequested = actionName => `${actionName}_${ACTION_SUFFIX_REQUESTED}`;
export const hasSucceeded = actionName => `${actionName}_${ACTION_SUFFIX_SUCCEEDED}`;
export const hasFailed = actionName => `${actionName}_${ACTION_SUFFIX_FAILED}`;
export const hasNormalized = actionName => `${actionName}_${ACTION_SUFFIX_NORMALIZED}`;
