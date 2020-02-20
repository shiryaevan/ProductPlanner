import { GET_RECIPES_REUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL } from './types';

const initialState = {
  isLoading: true,
  recipes: [],
};

export function recipes(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES_REUEST: {
      return { ...state, isLoading: true };
    }
    case GET_RECIPES_SUCCESS: {
      return { ...state, isLoading: false, recipes: action.payload };
    }
    case GET_RECIPES_FAIL: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
}
