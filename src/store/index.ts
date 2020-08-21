import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { requestMiddleware } from './middleware';
import { recipes, IRecipes } from './recipes';
import { savedRecipesLists, ISavedRecipesList } from './savedRecipesLists';

const reducers = combineReducers({
  recipes,
  savedRecipesLists,
});

const middlewares = [thunk, requestMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = createStore(reducers, applyMiddleware(...middlewares));

export interface IAction<T> {
  type: string;
  payload?: T;
}

export type IStore = {
  recipes: IRecipes;
  savedRecipesLists: ISavedRecipesList;
};
