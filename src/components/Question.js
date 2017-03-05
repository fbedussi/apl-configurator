import React from 'react';
import {connect} from 'react-redux';

import {getCurrentNode} from '../selectors'

const mapStateToProps = (state) => ({
    currentNode: getCurrentNode(state)
});

class Question extends React.Component {
   render() {
      return (
		 <div className="questions">
            <p>{this.currentNode.text}</p>
         </div>
      );
   }
};

export default connect(mapStateToProps)(Question);