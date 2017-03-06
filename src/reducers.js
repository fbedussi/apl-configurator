//import texts from '../texts.json';

function depthOf(obj) {
	var level = 0;
	Object.keys(obj).forEach(key => {
		if (typeof obj[key] === 'object') {
			var depth = depthOf(obj[key]) + 1;
			level = Math.max(depth, level);
		}
	});

	return level;
}

//var steps = depthOf(texts.it);

export default function reducer(state = {
	// steps: steps,
	// stepsLeft: steps,
	// goingBack: false,
	// breadcrumbs: [],
	// labels: texts.it.labels,
	// currentNode: texts.it.questions,
	// questions: texts.it.questions
}, action) {
	switch (action.type) {
		case 'SET_TEXTS':
			let steps = depthOf(action.texts.it)
			return Object.assign({}, state, {
				steps: steps,
				stepsLeft: steps,
				goingBack: false,
				breadcrumbs: [],
				labels: action.texts.it.labels,
				currentNode: action.texts.it.questions,
				questions: action.texts.it.questions
			});

		case 'PARSE_ANSWER':
			let newNode = state.currentNode[action.value];
			let newBreadcrumbs = state.breadcrumbs.concat(state.currentNode);
			//console.log(newBreadcrumbs);
			return Object.assign({}, state, {
				breadcrumbs: newBreadcrumbs,
				currentNode: newNode,
				goingBack: false,
				stepsLeft: depthOf(newNode)
			});


		case 'GO_BACK':
			let backNode = state.breadcrumbs.length >= 1 ? state.breadcrumbs[state.breadcrumbs.length - 1] : state.currentNode;

			//console.log(state.breadcrumbs.length >= 1? state.breadcrumbs.slice(0, state.breadcrumbs.length - 1) : []);
			return Object.assign({}, state, {
				breadcrumbs: state.breadcrumbs.length >= 1 ? state.breadcrumbs.slice(0, state.breadcrumbs.length - 1) : [],
				currentNode: backNode,
				goingBack: true,
				stepsLeft: depthOf(backNode)
			});

		default:
			return state;
	}
}
