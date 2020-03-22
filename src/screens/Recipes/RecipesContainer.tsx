import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { Recipes } from './Recipes';
import { getRecipes } from '../../store/recipes/actions';
import { storeType } from '../../store';
import { useNavigation } from '@react-navigation/native';
import { IRecipe } from '../../store/recipes/interfaces';

type Props = {
  getRecipes: () => void;
} & ReturnType<typeof mapStateToProps>;

const RecipesContainerPure = ({ recipes, isLoading, getRecipes }: Props) => {
  useEffect(() => {
    (async () => await getRecipes())();
  }, []);
  const navigation = useNavigation();

  const onItemPressHandler = (recipeItem: IRecipe) => {
    navigation.navigate('Recipe', {
      ...recipeItem,
    });
  };

  return isLoading ? <Text>Loading</Text> : <Recipes items={recipes} onItemPress={onItemPressHandler} />;
};

const mapStateToProps = (state: storeType) => {
  return {
    isLoading: state.recipes.isLoading,
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = {
  getRecipes,
};

export const RecipesContainer = connect(mapStateToProps, mapDispatchToProps)(RecipesContainerPure);
