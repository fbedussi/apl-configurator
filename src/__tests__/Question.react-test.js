import React from 'react';

import {Question} from '../components/Question';
import renderer from 'react-test-renderer';
import texts from './apl-texts.json'

var labels = texts.labels;
var questions = texts.questions;
var currentNode = texts.tree;
var breadcrumbs = [];

test('Question component', () => {
  const component = renderer.create(
    <Question labels={labels} questions={questions} currentNode={currentNode} breadcrumbs={breadcrumbs} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});