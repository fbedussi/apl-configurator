import React from 'react';
import { connect } from 'react-redux';

import {
    getSteps, getStepsLeft, getCurrentNode, getLabels,
    getGoingBack, getRequestStatus
} from '../selectors';
import { parseAnswer, goBack, toggleForm } from '../actions';

import Slide from './Slide';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    steps: getSteps(state),
    stepsLeft: getStepsLeft(state),
    requestStatus: getRequestStatus(state),
    goingBack: getGoingBack(state),
    currentNode: getCurrentNode(state)
});

const mapDispatchToProps = (dispatch) => ({
})

class Main extends React.Component {
    render() {
        if (this.props.requestStatus !== 'unsent') {
            return null;
        }

        return (
            <div className="wrapper main-wrapper">
                <div className="progressWrapper">
                    <span className="progressLabel">{this.props.labels["configurator"]}</span>
                    <progress className="progressBar" value={this.props.steps - this.props.stepsLeft} max={this.props.steps}></progress>
                </div>
                <div className={`workarea ${this.props.goingBack ? 'back' : ''} ${this.props.currentNode.questionId ? 'question' : 'answer'}`}>
                    <Slide />
                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);