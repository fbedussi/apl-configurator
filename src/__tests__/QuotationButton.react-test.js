import React from 'react';
import QuotationButton from '../components/QuotationButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';   

const show = true;
const text = 'button text';
const clickHandler = jest.fn();

test('Quotation button component - show', () => {
  const component = renderer.create(
    <QuotationButton
        show={show}
        text={text}
        clickHandler={clickHandler}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Quotation button component - hide', () => {
  const component = renderer.create(
    <QuotationButton
        show={false}
        text={text}
        clickHandler={clickHandler}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('QuotationButton component - call handler when clicked', () => {
  const component = shallow(
    <QuotationButton
        show={show}
        text={text}
        clickHandler={clickHandler}
    />
  );

  component.simulate('click');
  expect(clickHandler).toBeCalled();
});