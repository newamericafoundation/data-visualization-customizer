var path = require('path'),
	webpack = require('webpack');

module.exports = {

	entry: './src/index.js',

	output: {
		path: path.resolve('./'),
		publicPath: 'http://localhost:8000/',
		filename: 'index.js',
		sourceMapFilename: 'index.js.map'
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
					presets: [ 'es2015', 'react' ]
				}
			}

		]
	}

}