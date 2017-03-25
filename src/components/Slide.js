import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {createBrowserHistory} from 'history'

import { getLabels, getBreadcrumbs, getCurrentNode } from '../selectors';

import SlideInner from './SlideInner';
import Back from './Back';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    breadcrumbs: getBreadcrumbs(state),
    currentNode: getCurrentNode(state)
});

const mapDispatchToProps = (dispatch) => ({

})

const customHistory = createBrowserHistory({
  //customHistory: '/apl-configurator'
});

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
            <Router history={customHistory}>
            <div className="slide" key={this.props.currentNode.id} ref={slide => this.slide = slide}>
                <Route path="/:id" component={SlideInner} /> 
            <Back
                    show={Boolean(this.props.breadcrumbs.length)}
                    label={this.props.labels["back"]}
                    clickHandler={() =>
                        customHistory.goBack()
                    }
                />
            </div>
            </Router>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);