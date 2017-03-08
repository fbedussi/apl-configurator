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

    return <table className="recap">
        <thead>
            <th>
                <td>Domanda</td>
                <td>Risposta</td>
            </th>
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
}

export default Recap;