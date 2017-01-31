import React from 'react';
import { connect } from 'react-redux';

import { getAplSmartSensor } from '../../selectors';

const mapStateToProps = (state) => ({
    shown: getAplSmartSensor(state)
});

class AplSmartSensor extends React.Component {
    render() {
        const baseClassName = 'result aplSmart aplSmart--sensor';
        const classes = this.props.shown ? baseClassName : baseClassName + ' hide';
        return (
            <div className={classes}>
                <h1>Apl Smart Sensor</h1>
            </div>
        );
    }
};

export default connect(mapStateToProps)(AplSmartSensor);