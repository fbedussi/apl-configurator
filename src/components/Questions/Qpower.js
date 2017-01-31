import React from 'react';
import {connect} from 'react-redux';

import {setPower} from '../../actions';
import {getPower} from '../../selectors'

const mapStateToProps = (state) => ({
   power: getPower(state)
});

const mapDispatchToProsps = (dispatch) => ({
    setPower: (value) => {
        dispatch(setPower(value));
    }
});

class Qpower extends React.Component {
    
    handleChange(e, value) {
        this.props.setPower(value);
    }

    render() {
      return (
		 <div className="qpower question">
            <p>C'è alimentazione nel luogo di installazione dell'attravaresamento pedonale?</p>
            <label>
                <input type="radio" name="qpower" onChange={e => this.handleChange(e, true)} />
                Sì
            </label>
            <label>
                <input type="radio" name="qpower" onChange={e => this.handleChange(e, false)} />
                No
            </label>
         </div>
      );
   }
};

export default connect(mapStateToProps, mapDispatchToProsps)(Qpower);