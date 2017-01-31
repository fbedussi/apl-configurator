import React from 'react';
import {connect} from 'react-redux';

import Qpower from './Questions/Qpower';
import Qpedestrian from './Questions/Qpedestrian';
import Qinteraction from './Questions/Qinteraction';
import Qlane from './Questions/Qlane';
import {getPower, getPedestrian} from '../selectors'

const mapStateToProps = (state) => ({
    power: getPower(state),
    pedestrian: getPedestrian(state),
});

class Questions extends React.Component {
   render() {
      return (
		 <div className="questions">
            <Qpower />
            <Qpedestrian isVisibleIf={this.props.power === true}/>
            <Qinteraction isVisibleIf={this.props.pedestrian === true} />
            <Qlane isVisibleIf={this.props.pedestrian === false}/>
         </div>
      );
   }
};

export default connect(mapStateToProps)(Questions);