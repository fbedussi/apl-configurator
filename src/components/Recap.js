import React from 'react';

function getAnswerLabel(question, answerKey) {
    return question.options[answerKey];
}

const Recap = ({ labels, breadcrumbs, answersHistory, questions }) => {
    return <div className="recap">
        <table className="recap-table">
            <thead className="recap-head">
                <tr>
                    <th>{labels.question}</th>
                    <th>{labels.answer}</th>
                </tr>
            </thead>
            <tbody className="recap-body">
                {breadcrumbs.map((node, i) => {
                    var currentQuestion = questions.filter(question => question.id === node.questionId)[0];

                    return <tr key={i}>
                            <td dangerouslySetInnerHTML={{__html: currentQuestion.text}}/>
                            <td>
                                {getAnswerLabel(currentQuestion, answersHistory[i])}
                            </td>
                        </tr>;
                })}
            </tbody>
        </table>
    </div>;
};

export default Recap;
