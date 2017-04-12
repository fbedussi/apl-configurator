import React from 'react';
import Options from '../components/Options';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';   

const id = 0;
const options = ["no", "sì"];
const setAnswer = jest.fn();

test('Options component', () => {
  const component = renderer.create(
    <Options
        nodeId={id}
        options={options}
        setAnswer={setAnswer}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Options component - call handler when on option si clicked', () => {
  const component = shallow(
    <Options
        nodeId={id}
        options={options}
        setAnswer={setAnswer}
    />
  );

  component.find('#0_0').simulate('click');
  expect(setAnswer).toBeCalled();
});