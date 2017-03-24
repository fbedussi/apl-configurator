import React from 'react';
import Back from '../components/Back';
import renderer from 'react-test-renderer';

test('Back has an icon', () => {
  const component = renderer.create(
    <Back show={true} label="back" clickHandler={() => {}} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});