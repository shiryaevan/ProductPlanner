import { GET_RECIPES_REUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL } from './types';
import { recipesApi } from '../../api';

const recipesAction = data => {
  return {
    type: GET_RECIPES_SUCCESS,
    data,
  };
};

export const recipes = () => {
  return dispatch => {
    return recipesApi.getRecipes().then(data => dispatch(recipesAction(data)));
  };
};
