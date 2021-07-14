/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

//jest.mock('@react-native-community/async-storage', () => require('@react-native-community/async-storage/jest/async-storage-mock'));

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
