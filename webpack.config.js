const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
	mode: 'development',
	entry: {
		'/index': './src/index.js',
		'/about': './src/links/about.js',
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Restaurant Page',
			filename: 'index.html',
			template: 'src/template.html',
		}),
		new HtmlWebpackPlugin({
			title: 'About Restaurant',
			filename: 'About.html',
			template: 'src/template.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};