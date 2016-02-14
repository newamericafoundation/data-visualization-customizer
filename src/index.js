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

function getFile(options) {
	var $fileInput
	var { fileInputSelector } = options
	if (fileInputSelector == null) { return }
	$fileInput = $(fileInputSelector)
	return $fileInput[0].files[0]
}

function addCustomizer(options) {

	var { shouldDisableOptionsInput, fileContent, optionsInputSelector, appContainerSelector } = options

	var $optionsInput, $appContainer

	$optionsInput = $(optionsInputSelector)
	$appContainer = $(appContainerSelector)

	function disableOptionsInput() {
		$optionsInput.attr('disabled', shouldDisableOptionsInput)
	}

	function startApp(store) {
		console.log('Hi, Mom!')
		disableOptionsInput()
		render(<Provider store={store}><App endApp={endApp} /></Provider>, $appContainer[0])
	}

	function endApp(options) {
		$optionsInput.attr('value', JSON.stringify(options))
		unmountComponentAtNode($appContainer[0])
	}

	function getFileContent(next) {
		if (fileContent != null) { return next(fileContent) }
		readFileAsText(getFile(options), (text) => { return next(text) })
	}

	getFileContent((text) => {

		csvToJson(text, (json) => {
			var initialState = {
				data: json,
				options: {}
			}
			var store = createStore(appReducer, initialState)
			startApp(store)
		})

	})

}

function addCustomizerOnUpload(options) {
	var { fileInputSelector } = options
	var $fileInput = $(fileInputSelector)
	$fileInput.on('change', addCustomizer.bind(this, options))
}

global.dataVisualizationCustomizer = {
	addCustomizer: addCustomizer,
	addCustomizerOnUpload: addCustomizerOnUpload
}
