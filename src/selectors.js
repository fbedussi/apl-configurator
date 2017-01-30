export function getAplSolar(state) {
    return state.results.aplsolar;
}

export function showPedestrian(state) {
    return state.questions.showPedestrian;
}

export function showInteraction(state) {
    return state.questions.showInteraction;
}

export function showLane(state) {
    return state.questions.showLane;
}

export function getAplSmartTouch(state) {
    return state.results.aplsmart && state.results.aplsmart.touch;
}

export function getAplSmartSensor(state) {
    return state.results.aplsmart && state.results.aplsmart.sensor;
}

export function getAplClassicP(state) {
    return state.results.aplclassic && state.results.aplclassic.p;
}

export function getAplClassicN(state) {
    return state.results.aplclassic && state.results.aplclassic.n;
}

export function getPower(state) {
    return state.questions.power;
}

export function getPedestrian(state) {
    return state.questions.pedestrian;
}

export function getInteraction(state) {
    return state.questions.interaction;
}

export function getLane(state) {
    return state.questions.lane;
}