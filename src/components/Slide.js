import React from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { getCurrentNode } from '../selectors';

import Answer from './Answer';
import Question from './Question';

const mapStateToProps = (state) => ({
    currentNode: getCurrentNode(state)
});

const mapDispatchToProps = () => ({});

class Slide extends React.Component {
    render() {
        const { currentNode } = this.props;
        return (
            <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}>
                <div className="slide" key={currentNode.id}>
                        {currentNode.questionId && <Question currentNode={currentNode}/>}
                        {currentNode.answerId && <Answer currentNode={currentNode}/>}
                </div>
            </CSSTransitionGroup>
        );
    }
}


/*<ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}>
                <div className="slide" key={currentNode.id}>
                        {currentNode.questionId && <Question currentNode={currentNode}/>}
                        {currentNode.answerId && <Answer currentNode={currentNode}/>}
                </div>
            </ReactCSSTransitionGroup>*/
export default connect(mapStateToProps, mapDispatchToProps)(Slide);
