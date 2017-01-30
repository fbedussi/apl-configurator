import React from 'react';
import {connect} from 'react-redux';

import {getAplSmartTouch} from '../../selectors';

const baseClassName = 'result aplsolar';

const mapStateToProps = (state) => ({
   clss: getAplSmartTouch(state)? baseClassName : baseClassName + ' hide'
});

class AplSmartTouch extends React.Component {
   render() {
      return (
		 <div className={this.props.clss}>
            <h1>Apl Smart Touch</h1>
         </div>
      );
   }
};

export default connect(mapStateToProps)(AplSmartTouch);