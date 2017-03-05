import React from 'react';

const Answers = ({id, answers, setAnswer}) => {
    if (!answers) {
        return null;
    }

    return <fieldset className="answers">
            {answers.map(answer => {
                    var key = Object.keys(answer)[0];
                    var checked = false;
                    
                    return <label key={key} className="answerWrapper">
                        {answer[key]}
                        <input type="radio" name="answer" value={key} id={id + '_' + key} checked={checked} onClick={(e) => setAnswer(key)}/>
                    </label>;
                })
            }
    </fieldset>
}

export default Answers;