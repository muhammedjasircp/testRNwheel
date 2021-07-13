import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Example from '../src/screens/ExampleScreen';

test('renders correctly', () => {
  const tree = renderer.create(<Example />).toJSON();
  expect(tree).toMatchSnapshot();
});
