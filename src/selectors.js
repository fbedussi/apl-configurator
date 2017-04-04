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

export function getCurrentLanguage(state) {
    return state.currentLanguage;
}

export function getCurrentAnswer(state) {
    return state.answers.filter(answer => answer.id === state.currentNode.answerId)[0];
}