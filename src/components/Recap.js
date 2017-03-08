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

const Recap = ({ show, breadcrumbs, answers }) => {
    if (!show) {
        return null;
    }

    return <div className="recap">
        <h2 className="recap-title">Le tue risposte</h2>
        <table className="recap-table">
            <thead>
                <tr>
                    <th>Domanda</th>
                    <th>Risposta</th>
                </tr>
            </thead>
            <tbody>
                {breadcrumbs.map((node, i) => <tr>
                    <td>
                        {node.text}
                    </td>
                    <td>
                        {getAnswerLabel(node, answers, i)}
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
}

export default Recap;