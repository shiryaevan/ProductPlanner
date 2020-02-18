import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { Home, Recipes } from './src/screens';
import { RecipesContainer } from './src/containers';
import { store } from './src/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Recipes" component={RecipesContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
