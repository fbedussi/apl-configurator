//import texts from '../texts.json';

export function init(language = 'it') {
    //return { type: 'SET_TEXTS', texts };
    
    return function(dispatch) {
        fetch('texts_new.json', {
            mode: 'no-cors'
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(texts => {
            dispatch({ type: 'SET_TEXTS', texts })
        })
        .catch(function (err) {
            console.log('ERROR: ', err);
        });
    }
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

export function submitForm(data) {
    return function(dispatch) {
        dispatch({type: 'REQUEST_SENT'});   
        //https://github.com/dwyl/html-form-send-email-via-google-script-without-server
        fetch('https://script.google.com/macros/s/AKfycbzKkZDzW-TURbi1EieZDKHutU3QBLt0c4ylJuvuWrRacqW5BXYE/exec', {
            method: 'post',
            body: data
        })
        .then(response => {
            console.log(response);
            dispatch({type: 'REQUEST_SUCCESS'});        
        })
        .catch(err => {
            console.log(err);
            dispatch({type: 'REQUEST_ERROR'});                    
        });
    }
}