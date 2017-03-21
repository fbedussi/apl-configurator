import React from 'react';
import {Link} from 'react-router-dom';


const Options = ({currentNode, options, setAnswer, baseUrl, history}) => {
    if (!options) {
        return null;
    }

    return <div className="answers">
            {Object.keys(options).map(key => {
                    var optionId = currentNode[key].id;

                    return <button key={key} className="ctaBtn" onClick={e => {
                        history.push('/' + key, { some: 'state' })
                        setAnswer(e.target.key);
                        }}>
                        {options[key]}
                    </button>;
                })
            }
    </div>
}

export default Options;