import React from 'react';
import { connect } from 'react-redux';

import { getLabels, getBreadcrumbs, getAnswersHistory, getShowForm, getAnswers, getQuestions } from '../selectors';
import { toggleForm } from '../actions';

import Title from './Title';
import Images from './Images';
import Recap from './Recap';
import QuotationButton from './QuotationButton';
import Form from './Form';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    //currentNode: getCurrentNode(state),
    answersHistory: getAnswersHistory(state),
    breadcrumbs: getBreadcrumbs(state),
    answers: getAnswers(state),
    questions: getQuestions(state),
    showForm: getShowForm(state)
});

const mapDispatchToProps = (dispatch) => ({
    toggleForm: () => dispatch(toggleForm())
})

class Answer extends React.Component {
    render() {
        var answer = this.props.answers.filter(answer => answer.id === this.props.currentNode.answerId)[0];
        
        return (
            <div className="answer-contents">
                <Title text={answer.title} />

                <p className="answer-text">{answer.text}</p>
                
                <div className="answer-recapAndImage">
                    <Images
                        sources={answer.images}
                    />
                    <Recap
                        questions={this.props.questions}
                        labels={this.props.labels}
                        breadcrumbs={this.props.breadcrumbs}
                        answersHistory={this.props.answersHistory}
                    />
                </div>
                
                <Form
                    showForm={this.props.showForm} 
                />
                
                <QuotationButton
                    show={!this.props.showForm}
                    text={this.props.labels.quotationBtn}
                    clickHandler={() => this.props.toggleForm()}
                />          
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);