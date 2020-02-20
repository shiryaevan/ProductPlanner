export function requestMiddleware({ dispatch, getState }) {
  return next => action => {
    const { types, request } = action;

    if (!types && !request) return next(action);

    const [pendingType, successType, errorType] = types;

    dispatch({ type: pendingType });

    return request
      .then(response => {
        dispatch({
          type: successType,
          payload: response,
        });
      })
      .catch(error => {
        dispatch({
          type: errorType,
          payload: error,
        });
      });
  };
}
