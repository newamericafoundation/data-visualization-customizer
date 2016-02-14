import { getSelectedOption, getSelectedOptions } from './../helpers/selection_helpers.js'

import staticOptions from './static.json'

export function setDefaultOptions(previousOptions = {}, variables) {

	var options = {}

	function setStaticOption(key) {
		var previousOption = previousOptions[key]
		var allOptions = staticOptions[`${key}s`]
		options[key] = getSelectedOption(allOptions, previousOption)
	}

	function setSingleVariableOption(key) {
		var previousOption = previousOptions[key]
		var allOptions = variables
		options[key] = getSelectedOption(allOptions, previousOption)
	}

	function setMultipleVariableOption(key) {
		var previousOption = previousOptions[key]
		var allOptions = variables
		options[key] = getSelectedOptions(allOptions, previousOption)
	}

	setStaticOption('mapType')
	setStaticOption('colorScale')
	setStaticOption('mapZoomOption')

	setSingleVariableOption('mainVariable')
	setSingleVariableOption('timeVariable')

	setMultipleVariableOption('filterVariables')
	setMultipleVariableOption('sideBarVariables')

	return options

}

export default staticOptions
