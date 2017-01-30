import React from 'react';
import {connect} from 'react-redux';

import {setLane} from '../../actions';
import {showLane, getLane} from '../../selectors';

const baseClassName = 'qlane question';

const mapStateToProps = (state) => ({
   clss: showLane(state)? baseClassName : baseClassName + ' hide',
   lane: getLane(state)
});

const mapDispatchToProsps = (dispatch) => ({
    setLane: (e) => {
        var value = Boolean(Number(e.target.value));
        dispatch(setLane(value));
    }
});

class Qlane extends React.Component {
    render() {
      return (
         <div className={this.props.clss}>
            <p>La strada dove andrà collocato l'attraversamento ha una sola corsia?</p>
            <label>
                <input type="radio" name="qpower" value="1" onChange={this.props.setLane} checked={this.props.lane}/>
                Sì
            </label>
            <label>
                <input type="radio" name="qpower" value="0" onChange={this.props.setLane} checked={!this.props.lane}/>
                No
            </label>
         </div>
      );
   }
};

export default connect(mapStateToProps, mapDispatchToProsps)(Qlane);