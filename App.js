import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from './screen/LoginScreen';
import MainScreen from './screen/MainScreen';
import EditSceen from './screen/EditSceen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="EditSceen" component={EditSceen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
