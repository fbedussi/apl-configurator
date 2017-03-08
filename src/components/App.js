import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getSteps, getStepsLeft, getCurrentNode, getBreadcrumbs, getLabels, getGoingBack, getAnswers } from '../selectors';
import { parseAnswer, goBack } from '../actions';

import Answers from './Answers';
import Title from './Title';
import Back from './Back';
import Image from './Image';
import Recap from './Recap';
import Quotation from './Quotation';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    steps: getSteps(state),
    stepsLeft: getStepsLeft(state),
    goingBack: getGoingBack(state),
    currentNode: getCurrentNode(state),
    breadcrumbs: getBreadcrumbs(state),
    answers: getAnswers(state)
});

const mapDispatchToProps = (dispatch) => ({
    setAnswer: (value) => dispatch(parseAnswer(value)),
    goBack: (currentNode) => dispatch(goBack(currentNode))
})

class App extends React.Component {
    render() {
        return (
            <div className="configuratorWrapper">
                <div className="progressWrapper">
                    <span className="progressLabel">{this.props.labels["configurator"]}</span>
                    <progress className="progressBar" value={this.props.steps - this.props.stepsLeft} max={this.props.steps}></progress>
                </div>
                <div className={`workarea ${this.props.goingBack? 'back' : ''}`}>
                    <ReactCSSTransitionGroup
                        transitionName="slider"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <div className="slide" key={this.props.currentNode.id}>
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
                            />
                        </div>

                    </ReactCSSTransitionGroup>

                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);