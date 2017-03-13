import React from 'react';
import { connect } from 'react-redux';

import { getSteps, getStepsLeft, getCurrentNode, getBreadcrumbs, getLabels, getGoingBack, getAnswers, getShowForm } from '../selectors';
import { parseAnswer, goBack, toggleForm } from '../actions';

import Slide from './Slide';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    steps: getSteps(state),
    stepsLeft: getStepsLeft(state),
});

const mapDispatchToProps = (dispatch) => ({
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
                    <Slide />
                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);