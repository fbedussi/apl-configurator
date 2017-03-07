import React from 'react';

const Recap = ({ show, breadcrumbs, answers }) => {
    if (!show) {
        return null;
    }
    
    return <table className="recap">
          {breadcrumbs.map((breadcrumb, i) => <tr>
            <td>
                {breadcrumb.text}
            </td>
            <td>
                {breadcrumb.answers.filter(answer => {
                    var selectedAnswerKey = answers[i];
                    var currentAnswerKey = Object.keys(answer)[0]; 
                    return currentAnswerKey === selectedAnswerKey
                })[0].a}
            </td>
              </tr>)}  
    </table>
}

export default Recap;