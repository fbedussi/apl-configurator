import React from 'react';
import { connect } from 'react-redux';

import { getAplSolar } from '../../selectors';

const mapStateToProps = (state) => ({
    shown: getAplSolar(state)
});

class AplSolar extends React.Component {
    render() {
        const baseClassName = 'result aplsolar';
        const classes = this.props.shown ? baseClassName : baseClassName + ' hide';
        return (
            <div className={classes}>
                <h1>Apl Solar</h1>
            </div>
        );
    }
};

export default connect(mapStateToProps)(AplSolar);