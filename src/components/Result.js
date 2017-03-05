import React from 'react';
import {connect} from 'react-redux';

import AplSolar from './Results/AplSolar';
import AplSmartTouch from './Results/AplSmartTouch';
import AplSmartSensor from './Results/AplSmartSensor';
import AplClassicN from './Results/AplClassicN';
import AplClassicP from './Results/AplClassicP';
import {getPower, getInteraction, getLane} from '../selectors'

const mapStateToProps = (state) => ({
    power: getPower(state),
    interaction: getInteraction(state),
    lane: getLane(state)
});

class Result extends React.Component {
   render() {
      return (
		 <div className="results">
            <AplSolar isVisibleIf={this.props.power === false} />
            <AplSmartTouch isVisibleIf={this.props.interaction === true} />
            <AplSmartSensor isVisibleIf={this.props.interaction === false} />
            <AplClassicN isVisibleIf={this.props.lane === true} />
            <AplClassicP isVisibleIf={this.props.lane === false} />
         </div>
      );
   }
};

export default connect(mapStateToProps)(Result);