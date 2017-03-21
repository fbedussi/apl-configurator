import React from 'react';
import { connect } from 'react-redux';

import { getCurrentNode } from '../selectors';

import Answer from './Answer';
import Question from './Question';

const mapStateToProps = (state) => ({
    currentNode: getCurrentNode(state),
});

const mapDispatchToProps = (dispatch) => ({

})

class SlideInner extends React.Component {
    render() {
        if (this.props.currentNode.questionId) {
            return (<Question history={this.props.history}/>);
        }

        if (this.props.currentNode.answerId) {
            return (<Answer/>);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideInner);