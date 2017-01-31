export function questions(state = {
	power: null,
    pedestrian: null,
    interaction: null,
    lane: null
}, action) {
	switch (action.type) {
		case 'SET_POWER':
			return Object.assign({}, state, {
				power: action.value,
                pedestrian: null,
                interaction: null,
                lane: null
			});

        case 'SET_PEDESTRIAN':
			return Object.assign({}, state, {
				pedestrian: action.value,
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
