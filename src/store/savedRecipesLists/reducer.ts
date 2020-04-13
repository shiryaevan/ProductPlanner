import { SET_SAVED_RECIPES_LIST } from './types';
import { ISavedRecipesList } from './interfaces';
import { setStorageData } from '../../utils';
import { IAction } from '..';

const initialState = {};

export function savedRecipesLists(state = initialState, action: IAction<ISavedRecipesList>) {
  switch (action.type) {
    case SET_SAVED_RECIPES_LIST: {
      setStorageData('savedRecipesLists', { ...state, ...action.payload });
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
