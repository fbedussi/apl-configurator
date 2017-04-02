import React from 'react';

const Options = ({nodeId, options, setAnswer}) => {
    if (!options) {
        return null;
    }

    return <div className="question-options">
            {options.map((label, i) => {
                    return <button key={i} className="question-optionBtn ctaBtn" onClick={(e) => setAnswer(i)}>{label}</button>                    
                })
            }
    </div>
}

export default Options;