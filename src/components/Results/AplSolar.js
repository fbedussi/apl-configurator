import React from 'react';

class AplSolar extends React.Component {
    render() {
        const baseClassName = 'result aplsolar';
        const classes = this.props.isVisibleIf ? baseClassName : baseClassName + ' hide';
        return (
            <div className={classes}>
                <h1>Apl Solar</h1>
            </div>
        );
    }
};

export default AplSolar;