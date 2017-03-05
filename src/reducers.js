import texts from '../texts.json';

// function countLevelsObj(obj, id) {
// 	var levels = 0;
	
// 	Object.keys(obj).forEach(key => {
// 			if (obj.yes) {
// 				findSubObj(obj.yes, id);
// 			}

// 			if (obj.no) {
// 				findSubObj(obj.no, id);
// 			}
// 		}
// 	});

// 	return subObj;
// }

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

var steps = depthOf(texts.it);

export default function reducer(state = {
	steps: steps,
	stepsLeft: steps,
	breadcrumbs: [],
	currentNode: texts.it,
	texts: texts.it
}, action) {
	switch (action.type) {
		case 'PARSE_ANSWER':
			let newNode = state.currentNode[action.value];

			return Object.assign({}, state, {
				breadcrumbs: state.breadcrumbs.concat(state.currentNode),
				currentNode: newNode,
				stepsLeft: depthOf(newNode)
			});
		
		case 'GO_BACK':
			let backNode = state.breadcrumbs.length >= 1? state.breadcrumbs[state.breadcrumbs.length - 1] : state.currentNode;
			return Object.assign({}, state, {
				breadcrumbs: state.breadcrumbs.length >= 2? state.breadcrumbs.slice(0, state.breadcrumbs.length - 2) : [],
				currentNode: backNode,
				stepsLeft: depthOf(backNode)
			});

		default:
			return state;
	}
}
