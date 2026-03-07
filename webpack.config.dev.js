const path = require('path');
const common = require('./webpack.config.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},

	devtool: 'inline-source-map',

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		hot: true,
		port: 3000,
		open: true,
	},
});
