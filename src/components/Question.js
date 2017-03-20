import React from 'react';
import { connect } from 'react-redux';

import { getCurrentNode, getBreadcrumbs, getLabels, getGoingBack, getQuestions } from '../selectors';
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
})

class Question extends React.Component {
    render() {
        var question = this.props.questions.filter(question => question.id === this.props.currentNode.questionId)[0];
        
        return (
            <div className="slideInner">
                <Title currentNode={question.title} />
                <p className="text question-text">{question.text}</p>

                <Images
                    sources={question.images}
                />
                <Options
                    nodeId={this.props.currentNode.id}
                    answers={question.answers}
                    setAnswer={this.props.setAnswer}
                />
                <Back
                    show={Boolean(this.props.breadcrumbs.length)}
                    label={this.props.labels["back"]}
                    clickHandler={() =>
                        this.props.goBack(this.props.currentNode)
                    }
                />
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);