import React from 'react';
import {connect} from 'react-redux';

import AplSolar from './Results/AplSolar';
import AplSmartTouch from './Results/AplSmartTouch';
import AplSmartSensor from './Results/AplSmartSensor';
import AplClassicN from './Results/AplClassicN';
import AplClassicP from './Results/AplClassicP';

const mapStateToProps = (state) => ({
   
});

class Results extends React.Component {
   render() {
      return (
		 <div className="results">
            <AplSolar />
            <AplSmartTouch />
            <AplSmartSensor />
            <AplClassicN />
            <AplClassicP />
         </div>
      );
   }
};

export default connect(mapStateToProps)(Results);