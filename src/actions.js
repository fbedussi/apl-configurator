//import texts from '../texts.json';

export function init() {
    return function (dispatch) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'apl-texts.json');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    let texts = JSON.parse(xhr.responseText);
                    //console.log(xhr.responseText); // 'This is the returned text.'
                    dispatch({ type: 'SET_TEXTS', texts });
                } else {
                    console.log('ERROR: ' + xhr.status); // An error occurred during the request.
                }
            }
        };
    };
}

export function parseAnswer(value) {
    return { type: 'PARSE_ANSWER', value };
}

export function goBack(currentNode) {
    return { type: 'GO_BACK', currentNode };
}

export function toggleForm() {
    return { type: 'TOGGLE_FORM' };
}

export function submitForm(data) {
    return function (dispatch) {
        dispatch({ type: 'REQUEST_SENT' });
        //https://github.com/dwyl/html-form-send-email-via-google-script-without-server
        fetch('https://script.google.com/macros/s/AKfycbzKkZDzW-TURbi1EieZDKHutU3QBLt0c4ylJuvuWrRacqW5BXYE/exec', {
            method: 'post',
            body: data
        })
            .then(() => {
                dispatch({ type: 'REQUEST_SUCCESS' });
            })
            .catch(err => {
                /*eslint-disable */
                console.log(err);
                /*eslint-enable */
                dispatch({ type: 'REQUEST_ERROR' });
            });
    };
}
