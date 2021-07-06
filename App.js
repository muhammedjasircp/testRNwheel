import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Store, { Persistor } from '@src/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigatior from '@src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <NavigationContainer>
            <AppNavigatior />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
