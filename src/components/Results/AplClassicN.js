import React from 'react';
import {connect} from 'react-redux';

import {getAplClassicN} from '../../selectors';

const baseClassName = 'result aplClassic aplClassic--n';

const mapStateToProps = (state) => ({
   clss: getAplClassicN(state)? baseClassName : baseClassName + ' hide'
});

class AplClassicN extends React.Component {
   render() {
      return (
		 <div className={this.props.clss}>
            <h1>Apl Classic N</h1>
         </div>
      );
   }
};

export default connect(mapStateToProps)(AplClassicN);