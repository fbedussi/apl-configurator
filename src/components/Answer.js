import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getLabels, getCurrentNode, getBreadcrumbs, getAnswers, getShowForm } from '../selectors';
import { goBack, toggleForm } from '../actions';

import Answers from './Answers';
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
    answers: getAnswers(state),
    showForm: getShowForm(state)
});

const mapDispatchToProps = (dispatch) => ({
    goBack: (currentNode) => dispatch(goBack(currentNode)),
    toggleForm: () => dispatch(toggleForm())
})

class Answer extends React.Component {
    render() {
        return (
            <div className="slideInner">
                <Title currentNode={this.props.currentNode} />
                <p class="answer-text">{this.props.currentNode.text}</p>
                <div class="answer-recapAndImage">
                    <Recap
                        show={this.props.currentNode.type === 'answer'}
                        breadcrumbs={this.props.breadcrumbs}
                        answers={this.props.answers}
                    />
                    <Images
                        sources={this.props.currentNode.images}
                    />
                </div>
                <Form
                    showForm={this.props.showForm} 
                />
                <div class="answer-buttons">
                    <Back
                        show={Boolean(this.props.breadcrumbs.length)}
                        label={this.props.labels["back"]}
                        clickHandler={() =>
                            this.props.goBack(this.props.currentNode)
                        }
                    />
                    <QuotationButton
                        show={this.props.currentNode.type === 'answer' && !this.props.showForm}
                        clickHandler={() => this.props.toggleForm()}
                    />
                </div>
                
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);