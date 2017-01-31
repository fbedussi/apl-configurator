export function questions(state = {
	power: null,
    showPedetrsian: false,
    pedestrian: null,
    showInteraction: false,
    interaction: null,
    showLane: false,
    lane: null
}, action) {
	switch (action.type) {
		case 'SET_POWER':
			return Object.assign({}, state, {
				power: action.value,
                showPedestrian: !action.value,
                showInteraction: false,
                pedestrian: null,
                interaction: null,
                showLane: false,
                lane: null
			});

        case 'SET_PEDESTRIAN':
			return Object.assign({}, state, {
				pedestrian: action.value,
                showInteraction: action.value,
                showLane: !action.value,
                interaction: null,
                lane: null
			});

        case 'SET_INTERACTION':
			return Object.assign({}, state, {
				interaction: action.value
			});

         case 'SET_LANE':
			return Object.assign({}, state, {
				lane: action.value
			});

		default:
			return state;
	}
}

export function results(state = {
	aplsolar: null,
    aplsmart: {
        touch: null,
        sensor: null
    },
    aplclassic: {
        n: null,
        p: null
    }
}, action) {
	switch (action.type) {
		case 'SET_POWER':
			return Object.assign({}, state, {
				aplsolar: action.value,
                 aplsmart: {
                        touch: null,
                        sensor: null
                    },
                    aplclassic: {
                        n: null,
                        p: null
                    }
			});

        case 'SET_PEDESTRIAN':
			return Object.assign({}, state, {
                aplsolar: null,
				aplsmart: {
                    touch: null,
                    sensor: null
                },
                aplclassic: {
                    n: null,
                    p: null
                }
			});

        case 'SET_INTERACTION':
			return Object.assign({}, state, {
                aplsolar: null,
				aplsmart: {
                    touch: action.value,
                    sensor: !action.value
                },
                aplclassic: {
                    n: null,
                    p: null
                }
			});

        case 'SET_LANE':
			return Object.assign({}, state, {
				aplsolar: null,
				aplsmart: {
                    touch: null,
                    sensor: null
                },
                aplclassic: {
                    n: action.value,
                    p: !action.value
                }
			});

		default:
			return state;
	}
}
