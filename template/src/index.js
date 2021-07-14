import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';
import { PersistGate } from 'redux-persist/integration/react';
import Store, { Persistor } from '@src/redux/store';
import AppNavigator from '@src/navigation/AppNavigator';
import { configureAxios } from '@api/axiosConfig';

configureAxios();

const routingInstrumentation = new Sentry.ReactNavigationV5Instrumentation();
const { SENTRY_DSN, SENTRY_DEBUG, ENVIRONMENT } = Config;

Sentry.init({
  dsn: SENTRY_DSN,
  // this method will be invoked when the sentry is initialised to store initial device or user information for tracking the issue or performance.
  beforeSend: (event) => {
    // add required information to event obj.
    return event;
  },
  // this is to tell sentry to enable or disable from debugging.
  debug: SENTRY_DEBUG === 'true' ? true : false,
  maxBreadcrumbs: 150,
  // when the app goes to background the session tracking will be stopped after 5 secs due to which we need to enable auto session tracking and define session tracking interval so that it starts tracking the session when the app comes to foreground.
  enableAutoSessionTracking: true,
  sessionTrackingIntervalMillis: 10000,
  // this is to filter the app performance by categories with different environments.
  environment: ENVIRONMENT,
  // this is to track the continuous transactions made in the application by the user.
  integrations: [
    new Sentry.ReactNativeTracing({
      idleTimeout: 5000,
      routingInstrumentation,
      tracingOrigins: ['localhost', /^\//, /^https:\/\//],
    }),
  ],
  tracesSampleRate: 1.0,
});

Sentry.init({
  dsn: SENTRY_DSN,
  // this method will be invoked when the sentry is initialised to store initial device or user information for tracking the issue or performance.
  beforeSend: (event) => {
    // add required information to event obj.
    return event;
  },
  // this is to tell sentry to enable or disable from debugging.
  debug: SENTRY_DEBUG === 'true' ? true : false,
  maxBreadcrumbs: 150,
  // when the app goes to background the session tracking will be stopped after 5 secs due to which we need to enable auto session tracking and define session tracking interval so that it starts tracking the session when the app comes to foreground.
  enableAutoSessionTracking: true,
  sessionTrackingIntervalMillis: 10000,
  // this is to filter the app performance by categories with different environments.
  environment: ENVIRONMENT,
  // this is to track the continuous transactions made in the application by the user.
  integrations: [
    new Sentry.ReactNativeTracing({
      idleTimeout: 5000,
      routingInstrumentation,
      tracingOrigins: ['localhost', /^\//, /^https:\/\//],
    }),
  ],
  tracesSampleRate: 1.0,
});

const App = () => {
  const navigation = useRef();
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <NavigationContainer ref={navigation} onReady={() => routingInstrumentation.registerNavigationContainer(navigation)}>
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
