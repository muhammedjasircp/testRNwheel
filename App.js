// LIBRARIES
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import Store, {Persistor} from '@redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
// APP SETUP
import AppNavigaitor from './src/navigation';

const App = () => {
  useEffect(() => {
    // Splashcreen.hide
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <NavigationContainer>
            <AppNavigaitor />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
