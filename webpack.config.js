var path = require('path'),
	webpack = require('webpack');

module.exports = {

	entry: './src/index.js',

	output: {
		path: path.resolve('./'),
		publicPath: 'http://localhost:8000/',
		filename: 'data-visualization-customizer.js',
		sourceMapFilename: 'data-visualization-customizer.js.map'
	},

	resolve: {
		modulesDirectories: [ 'node_modules' ]
	},

	module: {
		loaders: [

			{
				test: /(\.js)|(\.jsx)$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: [ 'es2015', 'react', 'stage-1' ]
				}
			},

			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: /(node_modules|bower_components)/
			},

			{
				test: /\.css$/,
				loaders: [ 'style', 'css' ],
				exclude: /(node_modules|bower_components)/
			}

		]
	},

	devtool: 'source-map'

}
