import React from 'react';
import LinkHome from '../components/LinkHome';
import renderer from 'react-test-renderer';

const props = {
  text: 'Link text',
  url: 'http://www.example.com'
};

test('LinkHone component', () => {
  const component = renderer.create(
    <LinkHome {...props} />
  );
  
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});