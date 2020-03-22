import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { HomeContainer, RecipesContainer, RecipeContainer } from './src/screens';
import { store } from './src/store';
import { PropsRecipe } from './src/screens/Recipe';

export type RootStackParamList = {
  Home: undefined;
  Recipes: undefined;
  Recipe: PropsRecipe;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="Recipes" component={RecipesContainer} />
          <Stack.Screen name="Recipe" component={RecipeContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
