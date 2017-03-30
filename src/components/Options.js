import React from 'react';

const Options = ({nodeId, answers, setAnswer}) => {
    if (!answers) {
        return null;
    }

    return <div className="question-options">
            {answers.map((label, i) => {
                    return <button key={i} className="question-optionBtn ctaBtn" onClick={(e) => setAnswer(i)}>{label}</button>                    
                })
            }
    </div>
}

export default Options;