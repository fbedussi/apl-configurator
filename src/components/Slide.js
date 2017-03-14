import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getSteps, getStepsLeft, getCurrentNode, getBreadcrumbs, getLabels, getGoingBack, getAnswers, getShowForm, getRequestSent } from '../selectors';
import { parseAnswer, goBack, toggleForm } from '../actions';

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
    showForm: getShowForm(state),
    requestSent: getRequestSent(state)
});

const mapDispatchToProps = (dispatch) => ({
    setAnswer: (value) => dispatch(parseAnswer(value)),
    goBack: (currentNode) => dispatch(goBack(currentNode)),
    toggleForm: () => dispatch(toggleForm())
})

var currentSlideHeight = '0px';
var init = false;

class Slide extends React.Component {
    componentWillEnter(callback) {
        this.slide.style.height = 0;
        callback();
    }

    componentDidEnter() {
        this.slide.style.height = this.slide.querySelector('.slideInner').clientHeight + 'px';
        setTimeout(() => {
            callback();
        }, 500);
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="accordion"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <div className={`slide ${this.props.requestSent? 'hide' : ''}`} key={this.props.currentNode.id} ref={slide => this.slide = slide}>
                    <div className="slideInner">
                        <Title currentNode={this.props.currentNode} />
                        <p className={this.props.currentNode.type}>{this.props.currentNode.text}</p>
                        <Image
                            imgName={this.props.currentNode.image}
                        />
                        <Answers
                            id={this.props.currentNode.id}
                            answers={this.props.currentNode.answers}
                            setAnswer={this.props.setAnswer}
                        />
                        <Back
                            show={Boolean(this.props.breadcrumbs.length)}
                            label={this.props.labels["back"]}
                            clickHandler={() =>
                                this.props.goBack(this.props.currentNode)
                            }
                        />
                        <Recap
                            show={this.props.currentNode.type === 'answer'}
                            breadcrumbs={this.props.breadcrumbs}
                            answers={this.props.answers}
                        />
                        <Quotation
                            show={this.props.currentNode.type === 'answer'}
                            clickHandler={() => this.props.toggleForm()}
                            showForm={this.props.showForm}
                        />
                    </div>
                </div>

            </ReactCSSTransitionGroup>

        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);