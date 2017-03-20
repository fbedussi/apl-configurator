import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getCurrentNode, getRequestSent } from '../selectors';

import SlideInner from './SlideInner';

const mapStateToProps = (state) => ({
    currentNode: getCurrentNode(state),
    requestSent: getRequestSent(state)
});

const mapDispatchToProps = (dispatch) => ({

})

class Slide extends React.Component {
    render() {
        /*return (
             <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={2500}
                transitionLeaveTimeout={2500}>
            <div className={`slide ${this.props.requestSent? 'hide' : ''}`} key={this.props.currentNode.id} ref={slide => this.slide = slide}>
                    <SlideInner />
            </div>
            </ReactCSSTransitionGroup>
        );*/
        return (
            <div className={`slide ${this.props.requestSent? 'hide' : ''}`} key={this.props.currentNode.id} ref={slide => this.slide = slide}>
                    <SlideInner />
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);