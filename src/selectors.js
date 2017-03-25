export function getCurrentNode(state) {
    return state.currentNode;
}

export function getStepsLeft(state) {
    return state.stepsLeft;
}

export function getSteps(state) {
    return state.steps;
}

export function getBreadcrumbs(state) {
    return state.breadcrumbs;
}

export function getLabels(state) {
    return state.labels;
}

export function getChangeSlide(state) {
    return state.changeSlide;
}

export function getGoingBack(state) {
    return state.goingBack;
}

export function getAnswersHistory(state) {
    return state.answersHistory;
}

export function getShowForm(state) {
    return state.showForm;
}

export function getRequestStatus(state) {
    return state.requestStatus;
}

export function getAnswers(state) {
    return state.answers;
}

export function getQuestions(state) {
    return state.questions;
}

export function getRequestSuccess(state) {
    return state.requestSuccess;
}

export function getTree(state) {
    return state.tree;
}

// function getNodeById(obj, id) {   
//     if (obj.id === id) {
//         return obj;
//     }
//     var a = getNodeById(obj.a, id);
//     if (a) {
//         return a;
//     }

//     var b = getNodeById(obj.b, id);
//     if (b) {
//         return b;
//     }
// }

function getNodeById(obj, id) {
    var result = null;
    // if (obj instanceof Array) {
    //     for(var i = 0; i < obj.length; i++) {
    //         result = getNodeById(obj[i], id);
    //         if (result) {
    //             break;
    //         }   
    //     }
    // } else {
        for (var prop in obj) {
            console.log(prop + ': ' + obj[prop]);
            if (prop == 'id') {
                if (obj[prop] === id) {
                    return obj;
                }
            }
            //if (obj[prop] instanceof Object || obj[prop] instanceof Array) {
            if (obj[prop] instanceof Object) {
                result = getNodeById(obj[prop], id);
                if (result) {
                    break;
                }
            } 
        //}
    }
    return result;   
}

export function getCurrentNodeById(tree, id) {
    return getNodeById(tree, id); 
}