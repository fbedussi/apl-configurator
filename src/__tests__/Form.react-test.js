import React from 'react';
import Form from '../components/Form';
import renderer from 'react-test-renderer';
import texts from '../fakeData/apl-texts.json'
import {shallow} from 'enzyme';   

const submitHandler = jest.fn();

const props = {
  labels: texts.labels,
  answer: texts.answers[0],
  submitHandler
}

test('Form component', () => {
  const component = renderer.create(
    <Form {...props} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Form component - call handler when submit', () => {
  const component = shallow(
    <Form {...props} />
  );

  component.find({name: 'company'}).simulate('change', {target: {value: 'test'}});
  component.find({name: 'address'}).simulate('change', {target: {value: 'test'}});
  component.find({name: 'email'}).simulate('change', {target: {value: 'test@test.com'}});
  component.find({id: 'project'}).simulate('change', {target: {checked: true}});
  component.simulate('submit');

  expect(submitHandler).toBeCalled();
});