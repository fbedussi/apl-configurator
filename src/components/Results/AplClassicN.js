import React from 'react';

class AplClassicN extends React.Component {
    render() {
        const baseClassName = 'result aplClassic aplClassic--n';
        const classes = this.props.isVisibleIf ? baseClassName : baseClassName + ' hide';

        return (
            <div className={classes}>
                <h1>Apl Classic N</h1>
            </div>
        );
    }
};

export default AplClassicN;