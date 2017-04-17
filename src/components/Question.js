import React from 'react';
import { connect } from 'react-redux';

import { getBreadcrumbs, getLabels, getQuestions, getCurrentNode } from '../selectors';
import { parseAnswer, goBack } from '../actions';

import Title from './Title';
import Images from './Images';
import Options from './Options';
import Back from './Back';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    currentNode: getCurrentNode(state),
    questions: getQuestions(state),
    breadcrumbs: getBreadcrumbs(state)
});

const mapDispatchToProps = (dispatch) => ({
    setAnswer: (value) => dispatch(parseAnswer(value)),
    goBack: (currentNode) => dispatch(goBack(currentNode)),
});

export class Question extends React.Component {
    render() {
        const { questions, currentNode, breadcrumbs, labels } = this.props;
        const currentQuestion = questions.filter(question => question.id === currentNode.questionId)[0];

        return (
            <div className="slideInner question">
                <Title text={currentQuestion.title} />
                <p className="text question-text" dangerouslySetInnerHTML={{__html: currentQuestion.text}} />

                <Images
                    sources={currentQuestion.images}
                />
                <Options
                    nodeId={currentNode.id}
                    options={currentQuestion.options}
                    setAnswer={this.props.setAnswer}
                />
                <Back
                    show={Boolean(breadcrumbs.length)}
                    label={labels.back}
                    clickHandler={() =>
                        this.props.goBack(currentNode)
                    }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
