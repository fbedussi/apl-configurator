// export function init(language = 'it') {
//     return function(dispatch) {
//         fetch('http://localhost/apl-configurator/texts.json', {
//             "mode": "no-cors"
//         })
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .then(texts => {
//             dispatch({ type: 'SET_TEXTS', texts })
//         })
//         .catch(function (err) {
//             console.log('ERROR: ', err);
//         });
//     }
// }

export function parseAnswer(value) {
    return {type: 'PARSE_ANSWER', value};
}

export function goBack(currentNode) {
    return {type: 'GO_BACK', currentNode};
}