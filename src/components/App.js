import React from 'react';
import {connect} from 'react-redux';

import Results from './Results';
import Questions from './Questions';

const mapStateToProps = (state) => ({
   
});

class App extends React.Component {
   render() {
      return (
		 <div>
            <Questions />
            <Results />
         </div>
      );
   }
};

export default connect(mapStateToProps)(App);