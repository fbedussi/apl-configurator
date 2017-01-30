import React from 'react';
import {connect} from 'react-redux';

import {setPedestrian} from '../../actions';
import {showPedestrian, getPedestrian} from '../../selectors';

const baseClassName = 'qpedestrian question';

const mapStateToProps = (state) => ({
   clss: showPedestrian(state)? baseClassName : baseClassName + ' hide',
   pedestrian: getPedestrian(state)
});

const mapDispatchToProsps = (dispatch) => ({
    setPedestrian: (e) => {
        var value = Boolean(Number(e.target.value));
        dispatch({type: 'SET_PEDESTRIAN', value});
    }
});

class Qpedestrian extends React.Component {
    render() {
      return (
         <div className={this.props.clss}>
            <p>Il sistema deve essere dotato di dispositivo per l'interazione con il pedone?</p>
            <label>
                <input type="radio" name="qpower" value="1" onChange={this.props.setPedestrian} checked={this.props.pedestrian}/>
                Sì
            </label>
            <label>
                <input type="radio" name="qpower" value="0" onChange={this.props.setPedestrian} checked={!this.props.pedestrian}/>
                No
            </label>
         </div>
      );
   }
};

export default connect(mapStateToProps, mapDispatchToProsps)(Qpedestrian);