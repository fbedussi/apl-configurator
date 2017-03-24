import React from 'react';
import {Link} from 'react-router-dom';


const Options = ({currentNode, options, setAnswer, baseUrl, history}) => {
    if (!options) {
        return null;
    }

    return <div className="question-options">
            {Object.keys(answers).map(key => {
                    return <button key={key} className="question-optionBtn ctaBtn" onClick={(e) => setAnswer(key)}>{answers[key]}</button>                    
                })
            }
    </div>
}

export default Options;