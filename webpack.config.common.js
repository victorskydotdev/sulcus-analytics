const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');
// const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
	mode: 'none',

	entry: './src/index.js',

	// output: {
	// 	filename: '[name].[contenthash].js',
	// 	path: path.resolve('_dirname', 'dist'),
	// },

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			chunks: ['main'],
			filename: 'index.html',
			inject: 'head',
			// favicon: 'src/assets/favicon.png',
		}),

		new HtmlWebpackPlugin({
			template: './src/visual-lab.html',
			chunks: ['main'],
			filename: 'visual-lab.html',
			inject: 'head',
			// favicon: 'src/assets/favicon.png',
		}),
	],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', // Creates `style` nodes from JS strings
					'css-loader', // Translates CSS into CommonJS
					'sass-loader', // Compiles Sass to CSS
				],
			},

			{
				test: /\.html$/,
				use: ['html-loader'],
			},

			// {
			// 	test: /\.(svg|png|jpe?g|gif)$/,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: '[name].[hash].[ext]',
			// 			outputPath: 'imgs',
			// 		},
			// 	},
			// },

			{
				test: /\.(svg | png | jpe?g | gif$)/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[hash][ext]',
				},
			},
		],
	},
};
