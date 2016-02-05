export default function optionsReducer(state = {}, action) {

	var { type, payload } = action

	switch(type) {
		case 'SET_OPTIONS':
			return Object.assign({}, state, payload)
		default:
			return state
	}

}