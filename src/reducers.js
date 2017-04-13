/*eslint-disable */
function depthOf(obj) {
	var level = 0;
	Object.keys(obj).forEach(key => {
		if (obj[key] && typeof obj[key] === 'object') {
			const depth = depthOf(obj[key]) + 1;
			level = Math.max(depth, level);
		}
	});

	return level;
}

export default function reducer(state = {
	currentLanguage: 'it'
}, action) {
	switch (action.type) {
		case 'SET_TEXTS':
			const steps = depthOf(action.texts.tree)
			return Object.assign({}, state, {
				currentLanguage: action.texts.languageIsoCode,
				showForm: false,
				steps: steps,
				stepsLeft: steps,
				goingBack: false,
				breadcrumbs: [],
				answersHistory: [],
				labels: action.texts.labels,
				answers: action.texts.answers,
				questions: action.texts.questions,
				tree: action.texts.tree,
				currentNode: action.texts.tree,
				requestStatus: 'unsent' // || sent || success || error
			});

		case 'PARSE_ANSWER':
			const newNode = state.currentNode[action.value];
			const newBreadcrumbs = state.breadcrumbs.concat(state.currentNode);
			const newAnswersHistory = state.answersHistory.concat(action.value);

			return Object.assign({}, state, {
				breadcrumbs: newBreadcrumbs,
				answersHistory: newAnswersHistory,
				currentNode: newNode,
				goingBack: false,
				stepsLeft: depthOf(newNode)
			});


		case 'GO_BACK':
			const backNode = state.breadcrumbs.length >= 1 ? state.breadcrumbs[state.breadcrumbs.length - 1] : state.currentNode;

			//console.log(state.breadcrumbs.length >= 1? state.breadcrumbs.slice(0, state.breadcrumbs.length - 1) : []);
			return Object.assign({}, state, {
				breadcrumbs: state.breadcrumbs.length >= 1 ? state.breadcrumbs.slice(0, state.breadcrumbs.length - 1) : [],
				answersHistory: state.answersHistory.length >= 1 ? state.answersHistory.slice(0, state.answersHistory.length - 1) : [],
				currentNode: backNode,
				goingBack: true,
				showForm: false,
				stepsLeft: depthOf(backNode)
			});

		case 'TOGGLE_FORM':
			return Object.assign({}, state, { showForm: !state.showForm });

		case 'REQUEST_SENT':
			return Object.assign({}, state, { requestStatus: 'sent' });

		case 'REQUEST_SUCCESS':
			return Object.assign({}, state, { requestStatus: 'success' });

		case 'REQUEST_ERROR':
			return Object.assign({}, state, { requestStatus: 'error' });

		default:
			return state;
	}
}
