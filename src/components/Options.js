import React from 'react';
import {
    Link
} from 'react-router-dom';

const Options = ({currentNode, options, setAnswer}) => {
    if (!options) {
        return null;
    }

    return <div className="question-options">
            {Object.keys(options).map(key => {
                    return <Link 
                        key={key} 
                        className="question-optionBtn ctaBtn" 
                        to={`/${currentNode[key].id}`}
                        onClick={() => setAnswer(key)}
                    >{options[key]}</Link>                    
                })
            }
    </div>
}

export default Options;