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
        if (this.props.currentNode.type === 'question') {
            return (<Question />);
        }

        if (this.props.currentNode.type === 'answer') {
            return (<Answer />);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideInner);