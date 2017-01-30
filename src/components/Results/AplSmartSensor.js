import React from 'react';
import {connect} from 'react-redux';

import {getAplSmartSensor} from '../../selectors';

const baseClassName = 'result aplSmart aplSmart--sensor';

const mapStateToProps = (state) => ({
   clss: getAplSmartSensor(state)? baseClassName : baseClassName + ' hide'
});

class AplSmartSensor extends React.Component {
   render() {
      return (
		 <div className={this.props.clss}>
            <h1>Apl Smart Sensor</h1>
         </div>
      );
   }
};

export default connect(mapStateToProps)(AplSmartSensor);