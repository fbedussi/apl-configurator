import React from 'react';
import Title from '../components/Title';
import renderer from 'react-test-renderer';

const text = 'Title text';

test('Title component', () => {
  const component = renderer.create(
    <Title text={text} />
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});