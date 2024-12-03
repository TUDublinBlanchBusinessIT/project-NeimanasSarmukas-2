import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './register'; // Adjust path if necessary
import NextScreen from './select'; // Create this screen as a placeholder

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="register" component={RegistrationScreen} />
        <Stack.Screen name="select" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}