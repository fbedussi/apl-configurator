import React from 'react';
import {connect} from 'react-redux';

import {setLane} from '../../actions';
import {showLane, getLane} from '../../selectors';


const mapStateToProps = (state) => ({
   lane: getLane(state)
});

const mapDispatchToProsps = (dispatch) => ({
    setLane: (value) => {
        dispatch(setLane(value));
    }
});

class Qlane extends React.Component {
    handleChange(e, value) {
        this.props.setLane(value);
    }

    render() {
        const baseClassName = 'qlane question';
        const classes = this.props.isVisibleIf? baseClassName : baseClassName + ' hide';

        return (
         <div className={classes}>
            <p>La strada dove andrà collocato l'attraversamento ha una sola corsia?</p>
            <label>
                <input type="radio" name="qlane" onChange={(e) => this.handleChange(e, true)} checked={this.props.lane === true} />
                Sì
            </label>
            <label>
                <input type="radio" name="qlane" onChange={(e) => this.handleChange(e, false)} checked={this.props.lane === false}/>
                No
            </label>
         </div>
      );
   }
};

export default connect(mapStateToProps, mapDispatchToProsps)(Qlane);