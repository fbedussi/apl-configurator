import React from 'react';
import { connect } from 'react-redux';

import { getLabels, getBreadcrumbs, getAnswersHistory, getShowForm, getQuestions, getCurrentAnswer, getCurrentNode } from '../selectors';
import { goBack, toggleForm, submitForm } from '../actions';

import Title from './Title';
import Back from './Back';
import Images from './Images';
import Recap from './Recap';
import QuotationButton from './QuotationButton';
import Form from './Form';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    currentNode: getCurrentNode(state),
    breadcrumbs: getBreadcrumbs(state),
    answersHistory: getAnswersHistory(state),
    questions: getQuestions(state),
    showForm: getShowForm(state),
    currentAnswer: getCurrentAnswer(state)
});

const mapDispatchToProps = (dispatch) => ({
    goBack: (currentNode) => dispatch(goBack(currentNode)),
    toggleForm: () => dispatch(toggleForm()),
    submitForm: (data) => dispatch(submitForm(data))
});

class Answer extends React.Component {
    render() {
        const { currentAnswer, questions, labels, breadcrumbs, answersHistory, showForm, submitForm, currentNode } = this.props;

        const className = `slideInner answer ${showForm ? 'showForm' : 'hideForm'}`;

        return (
            <div className={className}>
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
                <Form
                    labels={labels}
                    answer={currentAnswer}
                    submitHandler={(e) => {
                        var form;
                        var data;

                        e.preventDefault();

                        form = e.target;
                        data = new FormData(form);

                        submitForm(data);
                    }}
                />

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
