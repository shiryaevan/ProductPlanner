import { GET_RECIPES_REUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL } from './types';
import { recipesApi } from '../../api';

export const getRecipes = () => {
  return {
    types: [GET_RECIPES_REUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL],
    request: recipesApi.getRecipes(),
  };
};
