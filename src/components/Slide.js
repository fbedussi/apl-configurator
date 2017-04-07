import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getCurrentNode } from '../selectors';

import Answer from './Answer';
import Question from './Question';

const mapStateToProps = (state) => ({
    currentNode: getCurrentNode(state)
});

const mapDispatchToProps = () => ({});

class Slide extends React.Component {
    render() {
        return (
             <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}>
                <div className="slide" key={this.props.currentNode.id}>
                        {this.props.currentNode.questionId && <Question currentNode={this.props.currentNode}/>}
                        {this.props.currentNode.answerId && <Answer currentNode={this.props.currentNode}/>}
                </div>
            </ReactCSSTransitionGroup>
        );
        /*return (
            <div className="slide">
                    <SlideInner />
            </div>
        );*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
