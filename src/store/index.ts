import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { recipes } from './recipes/reducer';

const reducers = combineReducers({
  recipes,
});

export const store = createStore(recipes, applyMiddleware(thunk));
