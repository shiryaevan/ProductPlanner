import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { requestMiddleware } from './middleware';
import { recipes } from './recipes/reducer';
import { IRecipes } from './recipes/interfaces';

const reducers = combineReducers({
  recipes,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, requestMiddleware)));

export type storeType = {
  recipes: IRecipes;
};
