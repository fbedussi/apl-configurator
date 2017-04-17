import React from 'react';
import Input from '../components/Input';
import renderer from 'react-test-renderer';

const props = {
  labelText: 'label text',
  name: 'company',
  required: true,
  minLength: 2
};

test('Input component', () => {
  const component = renderer.create(
    <Input {...props} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});