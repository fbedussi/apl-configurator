import React from 'react';
import { connect } from 'react-redux';

import { setPedestrian } from '../../actions';
import { showPedestrian, getPedestrian } from '../../selectors';

const mapStateToProps = (state) => ({
    shown: showPedestrian(state),
    pedestrian: getPedestrian(state)
});

const mapDispatchToProsps = (dispatch) => ({
    setPedestrian: (value) => {
        dispatch({ type: 'SET_PEDESTRIAN', value });
    }
});

class Qpedestrian extends React.Component {
    handleChange(e, value) {
        this.props.setPedestrian(value);
    }

    render() {
        const baseClassName = 'qpedestrian question';
        const classes = this.props.shown? baseClassName : baseClassName + ' hide';
        
        return (
            <div className={classes}>
                <p>Il sistema deve essere dotato di dispositivo per l'interazione con il pedone?</p>
                <label>
                    <input type="radio" name="qpedestrian" onChange={(e) => this.handleChange(e, true)} checked={this.props.pedestrian === true}/>
                    Sì
            </label>
                <label>
                    <input type="radio" name="qpedestrian" onChange={(e) => this.handleChange(e, false)} checked={this.props.pedestrian === false}/>
                    No
            </label>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProsps)(Qpedestrian);