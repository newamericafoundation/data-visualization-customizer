var baseConfig = require('./webpack.config.js');

var webpack = require('webpack');

var CompressionPlugin = require('compression-webpack-plugin');

baseConfig.plugins = [ new webpack.optimize.UglifyJsPlugin({
	mangle: {
		except: [ '$super', '$', 'exports', 'require' ]
	}
}), ];


module.exports = baseConfig;
