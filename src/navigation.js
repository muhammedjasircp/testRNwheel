// LIBRARIES
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS IMPORT
import ExampleScreen from './screens/ExampleScreen';

const Stack = createStackNavigator();
function AppNavigatior() {
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

export default AppNavigatior;
