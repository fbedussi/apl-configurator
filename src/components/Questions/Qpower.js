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
    constructor(props) {
        super(props);

        this.state = {
            power: this.props.power
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        var value = Boolean(Number(e.target.value));
        this.setState({power: value});
        this.props.setPower(value);
    }

    render() {
      return (
		 <div className="qpower question">
            <p>C'è alimentazione nel luogo di installazione dell'attravaresamento pedonale?</p>
            <label>
                <input type="radio" name="qpower" value="1" onChange={this.handleChange} checked={this.state.power}/>
                Sì
            </label>
            <label>
                <input type="radio" name="qpower" value="0" onChange={this.handleChange} checked={!this.state.power}/>
                No
            </label>
         </div>
      );
   }
};

export default connect(mapStateToProps, mapDispatchToProsps)(Qpower);