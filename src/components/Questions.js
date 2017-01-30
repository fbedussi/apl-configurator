import React from 'react';
import {connect} from 'react-redux';

import Qpower from './Questions/Qpower';
import Qpedestrian from './Questions/Qpedestrian';
import Qinteraction from './Questions/Qinteraction';
import Qlane from './Questions/Qlane';

const mapStateToProps = (state) => ({
   
});

class Questions extends React.Component {
   render() {
      return (
		 <div className="questions">
            <Qpower />
            <Qpedestrian />
            <Qinteraction />
            <Qlane />
         </div>
      );
   }
};

export default connect(mapStateToProps)(Questions);