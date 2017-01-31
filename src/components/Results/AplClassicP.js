import React from 'react';
import { connect } from 'react-redux';

import { getAplClassicP } from '../../selectors';

const mapStateToProps = (state) => ({
    shown: getAplClassicP(state)
});

class AplClassicP extends React.Component {
    render() {
        const baseClassName = 'result aplClassic aplClassic--p';
        const classes = this.props.shown ? baseClassName : baseClassName + ' hide';
        return (
            <div className={classes}>
                <h1>Apl Classic P</h1>
            </div>
        );
    }
};

export default connect(mapStateToProps)(AplClassicP);