import { GET_RECIPES_REUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL } from './types';
import { IAction } from '..';
import { IRecipe } from './interfaces';

const initialState = {
  isLoading: true,
  recipes: [],
};

export function recipes(state = initialState, action: IAction<IRecipe>) {
  switch (action.type) {
    case GET_RECIPES_REUEST: {
      return { ...state, isLoading: true };
    }
    case GET_RECIPES_SUCCESS: {
      const recipesObj: any = {};
      action.payload && Object.values(action.payload).forEach(i => (recipesObj[i.id] = i));
      return { ...state, isLoading: false, recipes: recipesObj };
    }
    case GET_RECIPES_FAIL: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}
