import { GET_RECIPES_REUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL } from './types';
import { DefaultApi } from '../../api';

export const getRecipes = () => {
  return {
    types: [GET_RECIPES_REUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL],
    request: new DefaultApi().recipesGet(),
  };
};
