import React from 'react';

class AplSmartSensor extends React.Component {
    render() {
        const baseClassName = 'result aplSmart aplSmart--sensor';
        const classes = this.props.isVisibleIf ? baseClassName : baseClassName + ' hide';
        return (
            <div className={classes}>
                <h1>Apl Smart Sensor</h1>
            </div>
        );
    }
};

export default AplSmartSensor;