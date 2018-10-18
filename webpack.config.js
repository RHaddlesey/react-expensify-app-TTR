const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	console.log('env', env);
	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/,
				},
				{
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true,
								},
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true,
								},
							},
						],
					}),
				},
			],
		},
		plugins: [CSSExtract],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
		},
	};
};

// entry -> output
// this is a node.js thing

// the output path is tricky! it has to be an absolute path, we can use a varable though
// (terminal) node webpack.config.js after we type and save the bellow line
// console.log(__dirname);
// this gave us the path in the terminal - /Users/richardhaddlesey/OneDrive/GitHub/React-js/react-course-projects/indecision-app
// because a different OS will have a different file path, we need to use node.js to concatenate the path above, with the OS specific
// path. So we now need to call and use path from node
// Once we have it, we can bin the console log and place it into the actual path
// console.log(path.join(__dirname, 'public'));

// s?css means it is looking for either scss or css files - simples

// in order to serve the HTML page for every route in our app client side, we need to set up
// historyApiFallback: true     this means that any 404s will serve up the main html front page.
