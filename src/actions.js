import texts from '../texts.json';

export function init(language = 'it') {
    return { type: 'SET_TEXTS', texts };
    // return function(dispatch) {
    //     fetch('texts.json', {
    //         mode: 'no-cors'
    //     })
    //     .then(response => {
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then(texts => {
    //         dispatch({ type: 'SET_TEXTS', texts })
    //     })
    //     .catch(function (err) {
    //         console.log('ERROR: ', err);
    //     });
    // }
}

export function parseAnswer(value) {
    return {type: 'PARSE_ANSWER', value};
}

export function goBack(currentNode) {
    return {type: 'GO_BACK', currentNode};
}

export function toggleForm() {
    return {type: 'TOGGLE_FORM'};    
}