import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { Recipes } from './Recipes';
import { IStore } from '../../store';
import { useNavigation } from '@react-navigation/native';

type Props = {
  getRecipes: () => void;
} & ReturnType<typeof mapStateToProps>;

const prepareSelectedRecipesIds = (data: string[]) => {
  const tmpArr: number[] = [];
  // transform _5 -> 5
  Object.entries(data).forEach(([key, value]) => value && tmpArr.push(Number(key.substr(1))));
  return tmpArr;
};

const RecipesContainerPure = ({ recipes, isLoading }: Props) => {
  const navigation = useNavigation();

  const onItemPressHandler = (recipeId: number) => {
    navigation.navigate('Recipe', {
      id: recipeId,
    });
  };

  const onSaveListPressHandler = (values: string[]) => {
    navigation.navigate('SaveList', {
      selectedRecipesIds: prepareSelectedRecipesIds(values),
    });
  };

  return isLoading ? (
    <Text>Loading</Text>
  ) : (
    <Recipes items={recipes} onSaveListPress={onSaveListPressHandler} onItemPress={onItemPressHandler} />
  );
};

const mapStateToProps = (state: IStore) => ({
  isLoading: state.recipes.isLoading,
  recipes: state.recipes.recipes,
});

export const RecipesContainer = connect(mapStateToProps)(RecipesContainerPure);
