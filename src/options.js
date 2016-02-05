var staticOptions = {
	mapTypes: [ 'pindrop', 'heatmap', 'proportional-circle-map' ],
	colorScales: [ 'default', 'chloropleth', 'positive-negative', 'positive-negative-oti' ],
	mapZoomOptions: [ 'zoomable', 'not zoomable: US', 'not zoomable: New England', 'not zoomable: Southeast', 'not zoomable: Midwest', 'not zoomable: Southwest' ],
	integratedChartOptions: [ 'display integrated chart', 'no integrated chart' ],
	integratedChartTypes: [ 
		'1 variable donut chart', 
		'2 variable bivariate donut chart', 
		'2 variable time series line chart', 
		'2 variable simple line chart', 
		'3 variable scatterplot (x, y, color)', 
		'3 variable stacked/grouped bar chart' 
	],
	chartOptionsTree: {
		'display': {
			'1-var': {
				type: [ 'donut' ],
				variables: {
					x: ''
				}
			},
			'2-var': {
				type: [ 'bivariate donut', 'line', 'simple line' ],
				variables: {
					x: '',
					y: ''
				}
			},
			'3-var': {
				type: [ 'scatterplot with color', 'stacked bar chart', 'grouped bar chart' ],
				variables: {
					x: '',
					y: '',
					z: ''
				}
			}
		},
		'no-display': null
	}
}

export function getSelectedOption(allOptions, previousSelectedOption) {
	if (previousSelectedOption == null) { 
		return allOptions[0] 
	}
	if (allOptions.indexOf(previousSelectedOption) === -1) {
		return allOptions[0]
	}
	return previousSelectedOption
}

export function getSelectedOptions(allOptions, previousSelectedOptions) {
	if (previousSelectedOptions == null) {
		return []
	}
	var newSelectedOptions = []
	for (let option of previousSelectedOptions) {
		if (allOptions.indexOf(option) > -1) { newSelectedOptions.push(option) }
	}
	return newSelectedOptions
}

export function updateOptions(previousOptions = {}, variables) {

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