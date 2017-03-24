import React from 'react';

import {Question} from '../components/Question';
import renderer from 'react-test-renderer';
import texts from '../../texts_new.json'

var labels = texts.it.labels;
var questions = texts.it.questions;
var currentNode = texts.it.tree;
var breadcrumbs = [];

test('Question component', () => {
  const component = renderer.create(
    <Question labels={labels} questions={questions} currentNode={currentNode} breadcrumbs={breadcrumbs} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});