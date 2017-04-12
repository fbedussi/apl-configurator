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
        const { answers, questions, labels, breadcrumbs, answersHistory, showForm, currentNode } = this.props;

        const currentAnswer = answers.filter(answer => answer.id === currentNode.answerId)[0];

        return (
            <div className="slideInner">
                <Title text={currentAnswer.title} />
                {currentAnswer.subtitle && <p className="subtitle">{currentAnswer.subtitle}</p>}
                <p className="answer-text" dangerouslySetInnerHTML={{__html: currentAnswer.text}}/>
                <div className="answer-recapAndImage">
                    <Images
                        sources={currentAnswer.images}
                    />
                    <Recap
                        questions={questions}
                        labels={labels}
                        breadcrumbs={breadcrumbs}
                        answersHistory={answersHistory}
                    />
                </div>
                <Form />

                <QuotationButton
                    show={!showForm}
                    text={labels.quotationBtn}
                    clickHandler={() => this.props.toggleForm()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
