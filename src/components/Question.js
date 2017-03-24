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

export class Question extends React.Component {
    render() {
        var nodeId = isNaN(this.props.nodeId)? 1: this.props.nodeId;
        var question = this.props.questions.filter(question => question.id === nodeId)[0];
        
        return (
            <div className="slideInner">
                <Title currentNode={question.title} />
                <p className="text question-text" dangerouslySetInnerHTML={{__html: question.text}} />

                <Images
                    sources={question.images}
                />
                <Options
                    currentNode={this.props.currentNode}
                    options={question.answers}
                    setAnswer={this.props.setAnswer}
                    baseUrl={this.props.baseUrl}
                    history={this.props.history}
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