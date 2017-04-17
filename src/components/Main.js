import React from 'react';
import { connect } from 'react-redux';

import {
    getSteps, getStepsLeft, getLabels, getCurrentNode,
    getGoingBack, getRequestStatus
} from '../selectors';

import Answer from './Answer';
import Question from './Question';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    steps: getSteps(state),
    stepsLeft: getStepsLeft(state),
    requestStatus: getRequestStatus(state),
    goingBack: getGoingBack(state),
    currentNode: getCurrentNode(state)
});

const mapDispatchToProps = () => ({
});

export class Main extends React.Component {
    render() {
        if (this.props.requestStatus !== 'unsent') {
            return null;
        }
        const { goingBack, labels, steps, stepsLeft, currentNode } = this.props;

        const className = `workarea ${goingBack ? 'back' : ''}`;

        return (
            <div className="wrapper main-wrapper">
                <div className="progressWrapper">
                    <span className="progressLabel">{labels.configurator}</span>
                    <progress
                        className="progressBar"
                        value={steps - stepsLeft}
                        max={steps}>
                    </progress>
                </div>
                <div
                    className={className}
                >
                    <div className="slide" key={currentNode.id}>
                        {currentNode.questionId && <Question />}
                        {currentNode.answerId && <Answer />}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
