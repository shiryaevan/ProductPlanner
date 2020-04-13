import React from 'react';
import { connect } from 'react-redux';
import { RouteProp } from '@react-navigation/native';

import { Recipe } from './Recipe';
import { IRecipe } from '../../store/recipes';
import { IStore } from '../../store';
import { RootStackParamList } from '../../App';

type Props = { recipe: IRecipe; route: RouteProp<RootStackParamList, 'Recipe'> };

const RecipeContainerPure = ({ recipe }: Props) => {
  return <Recipe {...recipe} />;
};

const mapStateToProps = (state: IStore, props: Props) => ({
  recipe: state.recipes.recipes[props.route.params.id],
});

export const RecipeContainer = connect(mapStateToProps)(RecipeContainerPure);
