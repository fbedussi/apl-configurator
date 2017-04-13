import React from 'react';
import { connect } from 'react-redux';

import {
    getSteps, getStepsLeft, getLabels,
    getGoingBack, getRequestStatus
} from '../selectors';

import Slide from './Slide';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    steps: getSteps(state),
    stepsLeft: getStepsLeft(state),
    requestStatus: getRequestStatus(state),
    goingBack: getGoingBack(state)
});

const mapDispatchToProps = () => ({
});

class Main extends React.Component {
    render() {
        if (this.props.requestStatus !== 'unsent') {
            return null;
        }
        const { goingBack, labels, steps, stepsLeft } = this.props;

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
                    <Slide />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
