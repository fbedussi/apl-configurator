import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../components/App';
import renderer from 'react-test-renderer';
import fakeStore from '../fakeData/fakeStore';

const store = createStore(() => fakeStore);

test('App component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
