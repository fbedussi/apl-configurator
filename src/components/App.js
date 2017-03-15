import React from 'react';
import { connect } from 'react-redux';

import { getSteps, getStepsLeft, getCurrentNode, getBreadcrumbs, getLabels, 
    getGoingBack, getAnswers, getShowForm, getRequestSent } from '../selectors';
import { parseAnswer, goBack, toggleForm } from '../actions';

import Slide from './Slide';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    steps: getSteps(state),
    stepsLeft: getStepsLeft(state),
    requestSent: getRequestSent(state),
    currentNode: getCurrentNode(state)
});

const mapDispatchToProps = (dispatch) => ({
})

class App extends React.Component {
    render() {
        return (
            <div class="appInner">
                <header class="header">
                    <a class="logoWrapper" href="http://www.attraversamentipedonali.it/">
                        <img src="images/logo_apl-02.png" alt="torna al sito attraversamentipedonali.it" />
                    </a>
                </header>
                <div className={"configuratorWrapper"}>
                    <div className="progressWrapper">
                        <span className="progressLabel">{this.props.labels["configurator"]}</span>
                        <progress className="progressBar" value={this.props.steps - this.props.stepsLeft} max={this.props.steps}></progress>
                    </div>
                    <div className={`workarea ${this.props.goingBack ? 'back' : ''} ${this.props.currentNode.type}`}>
                        <Slide />
                    </div>
                </div>
                <footer class="footer">
                    <a class="ctaBtn backToSiteBtn" href="http://www.attraversamentipedonali.it/">Torna al sito www.attraversamentipedonali.it</a>
                </footer>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);