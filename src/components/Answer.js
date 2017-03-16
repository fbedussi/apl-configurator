import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getLabels, getCurrentNode, getBreadcrumbs, getAnswers, getShowForm } from '../selectors';
import { goBack, toggleForm } from '../actions';

import Answers from './Answers';
import Title from './Title';
import Back from './Back';
import Image from './Image';
import Recap from './Recap';
import Quotation from './Quotation';


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
                    <Image
                        imgName={this.props.currentNode.image}
                    />
                </div>
                <div class="answer-buttons">
                    <Back
                        show={Boolean(this.props.breadcrumbs.length)}
                        label={this.props.labels["back"]}
                        clickHandler={() =>
                            this.props.goBack(this.props.currentNode)
                        }
                    />
                    <Quotation
                        show={this.props.currentNode.type === 'answer'}
                        clickHandler={() => this.props.toggleForm()}
                        showForm={this.props.showForm}
                    />
                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);