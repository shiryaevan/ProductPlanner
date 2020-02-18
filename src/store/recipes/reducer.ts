import { GET_RECIPES_REUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL } from './types';

const initialState = {
  recipes: [],
};

export function recipes(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES_REUEST:
      return { ...state, isLoading: true };
    case GET_RECIPES_SUCCESS: {
      return { ...state, isLoading: false, recipes: action.data };
    }
    case GET_RECIPES_REUEST:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
