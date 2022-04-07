export const createAction = (type, error = null) => (payload = null, meta = null) => ({
  type,
  payload,
  meta,
  error,
});

export const createErrorAction = type => createAction(type, true);

const mergeMeta = (left = {}, right = {}) => {
  const newMeta = { ...left, ...right };
  return Object.keys(newMeta).length ? newMeta : null;
};

export const createApiAction = (constants, request, options = {}) => {
  const requestAction = createAction(constants.REQUEST);
  const successAction = createAction(constants.SUCCESS);
  const failureAction = createErrorAction(constants.FAILURE);

  return (payload, meta = {}) => (dispatch, getState) => {
    const finalMeta = mergeMeta(options.meta, meta);
    dispatch(requestAction(payload, finalMeta));

    return request(payload, finalMeta, dispatch, getState)
      .then(response => {
        const data = response && response.data ? response.data : response;
        dispatch(successAction(data, finalMeta));
        return response;
      })
      .catch(error => {
        dispatch(failureAction(error, finalMeta));
        throw error;
      });
  };
};
