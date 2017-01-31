import React from 'react';
import { connect } from 'react-redux';

import { getAplClassicN } from '../../selectors';

const mapStateToProps = (state) => ({
    shown: getAplClassicN(state)
});

class AplClassicN extends React.Component {
    render() {
        const baseClassName = 'result aplClassic aplClassic--n';
        const classes = this.props.shown ? baseClassName : baseClassName + ' hide';

        return (
            <div className={classes}>
                <h1>Apl Classic N</h1>
            </div>
        );
    }
};

export default connect(mapStateToProps)(AplClassicN);