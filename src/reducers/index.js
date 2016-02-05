import { combineReducers } from 'redux'

import dataReducer from './data_reducer.js'
import optionsReducer from './options_reducer.js'

export default combineReducers({
	data: dataReducer,
	options: optionsReducer
})