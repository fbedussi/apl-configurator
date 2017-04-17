import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Answer from '../components/Answer';
import renderer from 'react-test-renderer';
import fakeStore from '../fakeData/fakeStore';

fakeStore.currentNode = {
  "id": 52,
  "questionId": null,
  "answerId": 9
};
const store = createStore(() => fakeStore);

test('App component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Answer />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
