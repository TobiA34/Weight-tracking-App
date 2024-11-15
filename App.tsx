import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './components/Screens/LaunchScreen';
import Home from './components/Screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;