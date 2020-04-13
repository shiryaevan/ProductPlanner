import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { getStorageData } from './utils/asyncStorage';
import { HomeContainer, RecipeContainer, RecipesContainer, SaveListContainer, ProductListContainer } from './screens';
import { ISavedRecipesList, setSavedRecipesLists } from './store/savedRecipesLists';
import { IStore } from './store';
import { getRecipes } from './store/recipes';

type PropsApp = {
  savedRecipesLists: ISavedRecipesList;
} & typeof mapDispatchToProps;

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Recipes: undefined;
  Recipe: { id: number };
  SaveList: { selectedRecipesIds: number[] };
  ProductList: { savedListId: number };
};

const AppPure = ({ setSavedRecipesLists, savedRecipesLists, getRecipes }: PropsApp) => {
  useEffect(() => {
    Object.keys(savedRecipesLists).length === 0 &&
      getStorageData('savedRecipesLists').then(value => {
        const result: ISavedRecipesList = value && JSON.parse(value);
        result && Object.entries(result).map(([key, resultValue]) => setSavedRecipesLists({ [key]: resultValue }));
      });
  }, [setSavedRecipesLists, savedRecipesLists]);

  useEffect(() => {
    (async () => await getRecipes())();
  }, [getRecipes]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Recipes" component={RecipesContainer} />
        <Stack.Screen name="Recipe" component={RecipeContainer} />
        <Stack.Screen name="SaveList" component={SaveListContainer} />
        <Stack.Screen name="ProductList" component={ProductListContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: IStore) => ({
  savedRecipesLists: state.savedRecipesLists,
});

const mapDispatchToProps = {
  setSavedRecipesLists,
  getRecipes,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppPure);
