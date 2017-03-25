import React from 'react';
import { connect } from 'react-redux';

import { getQuestions } from '../selectors';
import { parseAnswer } from '../actions';

import Title from './Title';
import Images from './Images';
import Options from './Options';

const mapStateToProps = (state) => ({
    questions: getQuestions(state)
});

const mapDispatchToProps = (dispatch) => ({
    setAnswer: (value) => dispatch(parseAnswer(value))
})

export class Question extends React.Component {
    render() {
        var question = this.props.questions.filter(question => question.id === this.props.currentNode.questionId)[0];
        
        return (
            <div className="question-contents">
                <Title text={question.title} />
                
                <p className="text question-text" dangerouslySetInnerHTML={{__html: question.text}} />

                <Images
                    sources={question.images}
                />
                <Options
                    currentNode={this.props.currentNode}
                    options={question.answers}
                    setAnswer={this.props.setAnswer}
                />
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);