import React from 'react';
import { connect } from 'react-redux';

import { getCurrentNode, getBreadcrumbs, getLabels, getGoingBack, getAnswers } from '../selectors';
import { parseAnswer, goBack } from '../actions';

import Title from './Title';
import Image from './Image';
import Answers from './Answers';
import Back from './Back';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    currentNode: getCurrentNode(state),
    breadcrumbs: getBreadcrumbs(state),
    answers: getAnswers(state),
});

const mapDispatchToProps = (dispatch) => ({
    setAnswer: (value) => dispatch(parseAnswer(value)),
    goBack: (currentNode) => dispatch(goBack(currentNode)),
})

class Question extends React.Component {
    render() {
        return (
            <div className="slideInner">
                <Title currentNode={this.props.currentNode} />
                <p>{this.props.currentNode.text}</p>

                <Image
                    imgName={this.props.currentNode.image}
                />
                <Answers
                    id={this.props.currentNode.id}
                    answers={this.props.currentNode.answers}
                    setAnswer={this.props.setAnswer}
                />
                <Back
                    show={Boolean(this.props.breadcrumbs.length)}
                    label={this.props.labels["back"]}
                    clickHandler={() =>
                        this.props.goBack(this.props.currentNode)
                    }
                />
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);