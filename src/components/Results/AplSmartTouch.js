import React from 'react';
import { connect } from 'react-redux';

class AplSmartTouch extends React.Component {
    render() {
        const baseClassName = 'result aplSmart aplSmart--touch';
        const classes = this.props.isVisibleIf ? baseClassName : baseClassName + ' hide';
        return (
            <div className={classes}>
                <h1>Apl Smart Touch</h1>
            </div>
        );
    }
};

export default AplSmartTouch;