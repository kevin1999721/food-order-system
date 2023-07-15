const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function (env) {
	const isDevelopment = env.NODE_ENV !== 'production';

	return {
		mode: isDevelopment ? 'development' : 'production',
		entry: './src/index.tsx',
		output: {
			filename: 'bundle.[contenthash].js',
			path: path.resolve(__dirname, 'dist'),
		},
		resolve: {
			extensions: ['.ts', '.js', '.tsx', '.jsx', 'json'],
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
				},
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				},
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/typescript'],
						},
					},
				},
				{
					test: /\.[jt]sx$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/typescript',
								[
									'@babel/preset-react',
									{
										runtime: 'automatic',
									},
								],
							],
							plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
						},
					},
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),
			!isDevelopment &&
				new MiniCssExtractPlugin({
					filename: 'style.[contenthash].css',
				}),
			isDevelopment && new ReactRefreshWebpackPlugin(),
		].filter(Boolean),
		optimization: {
			minimizer: [new CssMinimizerPlugin()],
		},
		devServer: {
			static: {
				directory: path.join(__dirname, 'public'),
			},
			hot: true,
		},
	};
};
