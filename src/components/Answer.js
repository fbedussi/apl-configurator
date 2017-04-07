import React from 'react';
import { connect } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getLabels, getBreadcrumbs, getAnswersHistory, getShowForm, getAnswers, getQuestions } from '../selectors';
import { goBack, toggleForm } from '../actions';

import Title from './Title';
import Back from './Back';
import Images from './Images';
import Recap from './Recap';
import QuotationButton from './QuotationButton';
import Form from './Form';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    //currentNode: getCurrentNode(state),
    breadcrumbs: getBreadcrumbs(state),
    answersHistory: getAnswersHistory(state),
    answers: getAnswers(state),
    questions: getQuestions(state),
    showForm: getShowForm(state),
    //answer: getCurrentAnswer(state)
});

const mapDispatchToProps = (dispatch) => ({
    goBack: (currentNode) => dispatch(goBack(currentNode)),
    toggleForm: () => dispatch(toggleForm())
});

class Answer extends React.Component {
    render() {
        var answer = this.props.answers.filter(answer =>
            answer.id === this.props.currentNode.answerId)[0];

        return (
            <div className="slideInner">
                <Title text={answer.title} />
                {answer.subtitle && <p className="subtitle">{answer.subtitle}</p>}
                <p className="answer-text" dangerouslySetInnerHTML={{__html: answer.text}}/>
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
                    //showForm={this.props.showForm}
                    //solutionName={answer.title + ' - ' + answer.subtitle}
                />

                <QuotationButton
                    show={!this.props.showForm}
                    text={this.props.labels.quotationBtn}
                    clickHandler={() => this.props.toggleForm()}
                />

                <Back
                    show={Boolean(this.props.breadcrumbs.length)}
                    label={this.props.labels.back}
                    clickHandler={() =>
                        this.props.goBack(this.props.currentNode)
                    }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
