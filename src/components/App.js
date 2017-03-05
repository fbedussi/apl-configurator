import React from 'react';
import { connect } from 'react-redux';

import { getSteps, getStepsLeft, getCurrentNode, getBreadcrumbs } from '../selectors';
import { parseAnswer, goBack } from '../actions';

import Answers from './Answers';
import Title from './Title';
import Back from './Back';

const mapStateToProps = (state) => ({
    steps: getSteps(state),
    stepsLeft: getStepsLeft(state),
    currentNode: getCurrentNode(state),
    breadcrumbs: getBreadcrumbs(state)
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
                    <span className="progressLabel">Configuratore</span>
                    <progress className="progressBar" value={this.props.steps - this.props.stepsLeft} max={this.props.steps}></progress>
                </div>
                <div className="workarea">
                    <Title currentNode={this.props.currentNode} />
                    <p className={this.props.currentNode.type}>{this.props.currentNode.text}</p>
                    <Answers
                        id={this.props.currentNode.id} 
                        answers={this.props.currentNode.answers} 
                        setAnswer={this.props.setAnswer}
                    />
                    <Back 
                        show={Boolean(this.props.breadcrumbs.length)}
                        clickHandler={() => 
                            this.props.goBack(this.props.currentNode)
                        } 
                    />
                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);