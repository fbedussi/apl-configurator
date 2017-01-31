import React from 'react';
import {connect} from 'react-redux';

import {setInteraction} from '../../actions';
import {showInteraction, getInteraction} from '../../selectors';

const mapStateToProps = (state) => ({
   shown: showInteraction(state),
   interaction: getInteraction(state)
});

const mapDispatchToProsps = (dispatch) => ({
    setInteraction: (value) => {
        dispatch({type: 'SET_INTERACTION', value});
    }
});

class Qinteraction extends React.Component {
    handleChange(e, value) {
        this.props.setInteraction(value);
    }

    render() {
        const baseClassName = 'qinteraction question';
        const classes = this.props.shown? baseClassName : baseClassName + ' hide';
        
        return (
         <div className={classes}>
            <p>L'interazione con il pedone deve essere attiva?</p>
            <label>
                <input type="radio" name="qinteraction" onChange={(e) => this.handleChange(e, true)} checked={this.props.interaction === true}/>
                Sì
            </label>
            <label>
                <input type="radio" name="qinteraction" onChange={(e) => this.handleChange(e, false)} checked={this.props.interaction === false}/>
                No
            </label>
         </div>
      );
   }
};

export default connect(mapStateToProps, mapDispatchToProsps)(Qinteraction);