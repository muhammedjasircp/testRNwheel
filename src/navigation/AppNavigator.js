import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ExampleScreen from '@screens/ExampleScreen';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name="ExampleScreen" component={ExampleScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
