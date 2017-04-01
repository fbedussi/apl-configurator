import React from 'react';
import { connect } from 'react-redux';

import { getLabels, getBreadcrumbs, getTree, getCurrentNodeById } from '../selectors';
import {goBack} from '../actions';

import Answer from './Answer';
import Question from './Question';
import Back from './Back';

const mapStateToProps = (state) => ({
    tree: getTree(state),    
    labels: getLabels(state),
    breadcrumbs: getBreadcrumbs(state)
});

const mapDispatchToProps = (dispatch) => ({
    goBack: (currentNode) => dispatch(goBack(currentNode))
})

class SlideInner extends React.Component {
    render() {
        var id = isNaN(this.props.match.params.id)? 1 : Number(this.props.match.params.id);
        var currentNode = getCurrentNodeById(this.props.tree, id);
        
        return (
            <div className="slideInner">
                {currentNode.questionId && <Question currentNode={currentNode}/>}
                {currentNode.answerId && <Answer currentNode={currentNode}/>}
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideInner);