import './style.css'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import $ from 'jquery'
import injectTapEventPlugin from 'react-tap-event-plugin'

import csvToJson from './helpers/csv_to_json.js'
import readFileAsText from './helpers/read_file_as_text.js'

import App from './components/app.jsx'
import appReducer from './reducers/index.js'

injectTapEventPlugin()

function start() {

	console.log('Hi, Mom!')

	var container = document.getElementById('app')

	$('#file').on('change', (e) => {
		var file = e.currentTarget.files[0]
		readFileAsText(file, (text) => {
			var json = csvToJson(text)
			var initialState = {
				data: json,
				options: {}
			}
			var store = createStore(appReducer, initialState)
			try {
				render(<Provider store={store}><App /></Provider>, container)
			} catch(e) {
				console.log(e.stack)
				console.log('There was an error rendering the form component.')
			}
		})
	})

}

$(start)