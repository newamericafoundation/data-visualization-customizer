export default {

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
	]

}