import React from 'react';
import {connect} from 'react-redux';

import {setInteraction} from '../../actions';
import {showInteraction, getInteraction} from '../../selectors';

const baseClassName = 'qinteraction question';

const mapStateToProps = (state) => ({
   clss: showInteraction(state)? baseClassName : baseClassName + ' hide',
   interaction: getInteraction(state)
});

const mapDispatchToProsps = (dispatch) => ({
    setInteraction: (e) => {
        var value = Boolean(Number(e.target.value));
        dispatch({type: 'SET_INTERACTION', value});
    }
});

class Qinteraction extends React.Component {
    render() {
      return (
         <div className={this.props.clss}>
            <p>L'interazione con il pedone deve essere attiva?</p>
            <label>
                <input type="radio" name="qpower" value="1" onChange={this.props.setInteraction} checked={this.props.interaction}/>
                Sì
            </label>
            <label>
                <input type="radio" name="qpower" value="0" onChange={this.props.setInteraction} checked={!this.props.interaction}/>
                No
            </label>
         </div>
      );
   }
};

export default connect(mapStateToProps, mapDispatchToProsps)(Qinteraction);