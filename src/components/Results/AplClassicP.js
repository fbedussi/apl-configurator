import React from 'react';
import {connect} from 'react-redux';

import {getAplClassicP} from '../../selectors';

const baseClassName = 'result aplClassic aplClassic--p';

const mapStateToProps = (state) => ({
   clss: getAplClassicP(state)? baseClassName : baseClassName + ' hide'
});

class AplClassicP extends React.Component {
   render() {
      return (
		 <div className={this.props.clss}>
            <h1>Apl Classic P</h1>
         </div>
      );
   }
};

export default connect(mapStateToProps)(AplClassicP);