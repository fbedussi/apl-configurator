import React from 'react';
import {connect} from 'react-redux';

import {getAplSolar} from '../../selectors';

const baseClassName = 'result aplsolar';

const mapStateToProps = (state) => ({
   clss: getAplSolar(state)? baseClassName : baseClassName + ' hide'
});

class AplSolar extends React.Component {
   render() {
      return (
		 <div className={this.props.clss}>
            <h1>Apl Solar</h1>
         </div>
      );
   }
};

export default connect(mapStateToProps)(AplSolar);