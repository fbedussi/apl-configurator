import React from 'react';

function getAnswerLabel(node, answers, i) {
    var selectedAnswerKey = answers[i];
    var selectedAnswerArr = node.answers.filter(answer => {
        var answerKey = Object.keys(answer)[0];
        return answerKey === selectedAnswerKey
    });
    var selecterAnswerLAbel = selectedAnswerArr[0][selectedAnswerKey];
    return selecterAnswerLAbel
}

const Quotation = ({ show}) => {
    if (!show) {
        return null;
    }

    var showForm = false;

    return <div className="quotation">
        <button 
            className="quotation-btn"
            onClick={() => {
                showForm = !showForm;
            }
            }
        >Verifica quanto costa</button>
        <form 
            className={`quotation-form ${showForm? 'show' : 'hide'}`}
        >
            <label>
                Nome
                <input type="text"/>>
            </label>
            <label>
                e-main
                <input type="email"/>>
            </label>
            <button>Invia</button>
        </form>
    </div>
}

export default Quotation;