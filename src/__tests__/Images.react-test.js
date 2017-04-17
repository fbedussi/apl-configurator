import React from 'react';
import Images from '../components/Images';
import renderer from 'react-test-renderer';

const props = {
  sources: ['src1', 'src2']
};

test('Images component', () => {
  const component = renderer.create(
    <Images {...props} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});