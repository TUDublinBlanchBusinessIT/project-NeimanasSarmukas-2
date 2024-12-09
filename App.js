import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './register'; // Adjust path if necessary
import NextScreen from './select'; // Create this screen as a placeholder
import Employee1 from './employee1';
import Employee2 from './employee2';
import Employer1 from './employer1';
import Employer2 from './employer2';
import ProfileScreen from './ProfileScreen';




const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
       <Stack.Screen name="register" component={RegistrationScreen} />
        <Stack.Screen name="select" component={NextScreen} />
        <Stack.Screen name="employee1" component={Employee1} />
        <Stack.Screen name="employee2" component={Employee2} />
        <Stack.Screen name="employer1" component={Employer1} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="employer2" component={Employer2} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}