import React from 'react';

const Options = ({nodeId, answers, setAnswer}) => {
    if (!answers) {
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