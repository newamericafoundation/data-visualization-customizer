console.log('Hi, Mom!')

import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

import Root from './components/root.jsx'

function csvToJson(csv) {
	var allRows = csv.split('\n').map(row => row.split(','))
	var headerRow = allRows.slice(0, 1)[0]
	var contentRows = allRows.slice(1)
	return contentRows.map((row, i) => {
		var obj = {}
		row.forEach((item, j) => { obj[headerRow[j]] = item })
		return obj
	})
}

function readFileAsText(file, next) {
	var reader = new FileReader()
	reader.onload = function() { return next(reader.result) }
	reader.readAsText(file)
}

function start() {

	var container = document.getElementById('app')

	$('#file').on('change', (e) => { 
		var file = e.currentTarget.files[0]
		readFileAsText(file, (text) => {
			render(<Root data={csvToJson(text)} />, container)
		})
	})

}

$(start)