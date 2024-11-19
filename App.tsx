// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import FrenchCuisineScreen from './FrenchCuisineScreen';
import JapaneseCuisineScreen from './JapaneseCuisineScreen';
import ItalianCuisineScreen from './ItalianCuisineScreen';
import FilterMenuScreen from './FilterMenuScreen';
import OrderScreen from './OrderScreen';

import NormalMenuScreen from './NormalMenuScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FrenchCuisine" component={FrenchCuisineScreen} />
        <Stack.Screen name="JapaneseCuisine" component={JapaneseCuisineScreen} />
        <Stack.Screen name="ItalianCuisine" component={ItalianCuisineScreen} />
        <Stack.Screen name="NormalMenu" component={NormalMenuScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="FilterMenu" component={FilterMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;