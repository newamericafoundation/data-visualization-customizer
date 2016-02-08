import './style.css'

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import $ from 'jquery'
import injectTapEventPlugin from 'react-tap-event-plugin'

import csvToJson from './helpers/csv_to_json.js'
import readFileAsText from './helpers/read_file_as_text.js'

import App from './components/app.jsx'
import appReducer from './reducers/index.js'

injectTapEventPlugin()

function addCustomizerOnUpload(options) {

	var { fileInputSelector, optionsInputSelector, appContainerSelector } = options

	var $fileInput = $(fileInputSelector)
	var $optionsInput = $(optionsInputSelector)
	var $appContainer = $(appContainerSelector)

	function startApp(store) {
		console.log('Hi, Mom!')
		$optionsInput.attr('disabled', true)
		render(<Provider store={store}><App endApp={endApp} /></Provider>, $appContainer[0])
	}

	function endApp(options) {
		$optionsInput.attr('value', JSON.stringify(options))
		unmountComponentAtNode($appContainer[0])
	}

	$(fileInputSelector).on('change', (e) => {
		var file = e.currentTarget.files[0]
		readFileAsText(file, (text) => {
			var json = csvToJson(text)
			var initialState = {
				data: json,
				options: {}
			}
			var store = createStore(appReducer, initialState)
			startApp(store)
		})
	})

}

global.dataVisualizationCustomizer = {
	addCustomizerOnUpload: addCustomizerOnUpload
}
