import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from '../components/Main';
import renderer from 'react-test-renderer';
import fakeStore from '../fakeData/fakeStore';

const store = createStore(() => fakeStore);

test('Main component - slide', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Main component - sent', () => {
  store.requestStatus = 'sent'

  const component = renderer.create(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Main component - success', () => {
  store.requestStatus = 'success'

  const component = renderer.create(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Main component - error', () => {
  store.requestStatus = 'error'

  const component = renderer.create(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});