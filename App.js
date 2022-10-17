import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import ResetPassword from './screens/ResetPassword';
import EditVaccine from './screens/EditVaccine';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{headerShown: false}}
            />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditVaccine"
            component={EditVaccine}
            options={{headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
