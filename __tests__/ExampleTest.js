import React from 'react';
import renderer from 'react-test-renderer';
import Example from '../src/screens/ExampleScreen';

test('renders correctly', () => {
  const tree = renderer.create(<Example />).toJSON();
  expect(tree).toMatchSnapshot();
});
