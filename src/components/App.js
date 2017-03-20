import React from 'react';
import { connect } from 'react-redux';

import {
    getSteps, getStepsLeft, getCurrentNode, getBreadcrumbs, getLabels,
    getGoingBack, getAnswers, getShowForm, getRequestSent
} from '../selectors';
import { parseAnswer, goBack, toggleForm } from '../actions';

import Slide from './Slide';
import LinkHome from './LinkHome';

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
                <header className="header">
                    <div className="wrapper header-wrapper">
                        <a className="logoLink" href="http://www.attraversamentipedonali.it/">
                            <img src="images/logo_apl-02.png" alt="torna al sito attraversamentipedonali.it" />
                        </a>
                        <LinkHome text="Home page >" />
                    </div>
                </header>
                <div className="wrapper main-wrapper">
                    <div className="progressWrapper">
                        <span className="progressLabel">{this.props.labels["configurator"]}</span>
                        <progress className="progressBar" value={this.props.steps - this.props.stepsLeft} max={this.props.steps}></progress>
                    </div>
                    <div className={`workarea ${this.props.goingBack ? 'back' : ''} ${this.props.currentNode.type}`}>
                        <Slide />
                    </div>
                </div>
                <footer className="footer">
                    <div className="wrapper footer-wrapper">
                        <div className="footer-logoAndLink">
                            <img src="images/d-power-logo.png" alt="Attraversamento Pedonale Luminoso è un progetto D-power" />
                            <LinkHome text="Home page >" />
                        </div>
                        <small className="copyright">&copy; Detas.com - All rights reserved</small>
                    </div>
                </footer>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);