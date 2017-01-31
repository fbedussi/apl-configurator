import React from 'react';

class AplClassicP extends React.Component {
    render() {
        const baseClassName = 'result aplClassic aplClassic--p';
        const classes = this.props.isVisibleIf ? baseClassName : baseClassName + ' hide';
        return (
            <div className={classes}>
                <h1>Apl Classic P</h1>
            </div>
        );
    }
};

export default AplClassicP;