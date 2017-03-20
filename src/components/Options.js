import React from 'react';

const Options = ({nodeId, answers, setAnswer}) => {
    if (!answers) {
        return null;
    }

    return <fieldset className="answers">
            {Object.keys(answers).map(key => {
                    var checked = false;
                    
                    return <label key={key} className="answerWrapper">
                        {answers[key]}
                        <input type="radio" name="answer" value={key} id={nodeId + '_' + key} checked={checked} onClick={(e) => setAnswer(key)}/>
                    </label>;
                })
            }
    </fieldset>
}

export default Options;