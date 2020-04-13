import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

export const requestMiddleware: Middleware = ({ dispatch }: MiddlewareAPI) => {
  return (next: Dispatch) => action => {
    const { types, type, request } = action;

    if ((!types || !type) && !request) {
      return next(action);
    }

    if (type) {
      dispatch({ type: type, payload: request });
    } else {
      const [pendingType, successType, errorType] = types;

      dispatch({ type: pendingType, payload: request });

      return request
        .then((response: any) => {
          dispatch({
            type: successType,
            payload: response,
          });
        })
        .catch((error: any) => {
          dispatch({
            type: errorType,
            payload: error,
          });
        });
    }
  };
};
