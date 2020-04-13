import React from 'react';
import { connect } from 'react-redux';

import { ProductList } from './ProductList';
import { IStore } from '../../store';
import { IRecipe, IRecipes } from '../../store/recipes';
import { RouteProp } from '@react-navigation/core';
import { RootStackParamList } from '../../App';

type PropsProductListContainer = {
  savedRecipesList: number[];
  route: RouteProp<RootStackParamList, 'ProductList'>;
} & Pick<IRecipes, 'recipes'>;

const ProductListContainerPure = ({ savedRecipesList, recipes }: PropsProductListContainer) => {
  const recipesList: IRecipe[] = [];
  savedRecipesList.map(i => recipesList.push(recipes[i]));
  console.log(recipesList);
  return <ProductList recipes={recipesList} />;
};

const mapStateToProps = (state: IStore, props: PropsProductListContainer) => ({
  savedRecipesList: state.savedRecipesLists[props.route.params.savedListId],
  recipes: state.recipes.recipes,
});

export const ProductListContainer = connect(mapStateToProps)(ProductListContainerPure);
