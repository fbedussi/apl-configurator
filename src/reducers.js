export function questions(state = {
	power: false,
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
                showLane: false
			});

        case 'SET_PEDESTRIAN':
			return Object.assign({}, state, {
				pedestrian: action.value,
                showInteraction: action.value,
                showLane: !action.value
			});

        case 'SET_INTERACTION':
			return Object.assign({}, state, {
				interaction: action.value
			});

		default:
			return state;
	}
}

export function results(state = {
	aplsolar: false,
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
				aplsolar: action.value
			});

        case 'SET_PEDESTRIAN':
			return Object.assign({}, state, {
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
				aplsmart: {
                    touch: action.value,
                    sensor: !action.value
                }
			});

        case 'SET_LANE':
			return Object.assign({}, state, {
				aplclassic: {
                    n: action.value,
                    p: !action.value
                }
			});

		default:
			return state;
	}
}
