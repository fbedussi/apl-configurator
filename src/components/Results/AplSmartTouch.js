import React from 'react';
import { connect } from 'react-redux';

import { getAplSmartTouch } from '../../selectors';

const mapStateToProps = (state) => ({
    shown: getAplSmartTouch(state)
});

class AplSmartTouch extends React.Component {
    render() {
        const baseClassName = 'result aplSmart aplSmart--touch';
        const classes = this.props.shown ? baseClassName : baseClassName + ' hide';
        return (
            <div className={classes}>
                <h1>Apl Smart Touch</h1>
            </div>
        );
    }
};

export default connect(mapStateToProps)(AplSmartTouch);