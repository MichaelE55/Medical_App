
//Because App.js runs first, we only need to import nativewind and global css here and not in the other page or src files
import 'nativewind'; 
import './global.css';
//---------------------------

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';  // Login Screen
import DashboardScreen from './src/DashboardScreen';  // Dashboard Screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
