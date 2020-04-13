import { SET_SAVED_RECIPES_LIST } from './types';
import { ISavedRecipesList } from './interfaces';

export const setSavedRecipesLists = (savedList: ISavedRecipesList) => {
  return {
    type: SET_SAVED_RECIPES_LIST,
    request: savedList,
  };
};
