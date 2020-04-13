import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { requestMiddleware } from './middleware';
import { recipes, IRecipes } from './recipes';
import { savedRecipesLists, ISavedRecipesList } from './savedRecipesLists';

const reducers = combineReducers({
  recipes,
  savedRecipesLists,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, requestMiddleware)));

export interface IAction<T> {
  type: string;
  payload?: T;
}

export type IStore = {
  recipes: IRecipes;
  savedRecipesLists: ISavedRecipesList;
};
