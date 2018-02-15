var webpack = require("webpack");

module.exports = {
	entry: __dirname +"/src/index.js", //sourcefile
	output: {
		path: __dirname + "/dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: { //enables hot reloading
		inline: true,
		contentBase: __dirname + '/dist',
		port: 3000
	},
	module: {
		rules: [ //webpack has many loaders 
			{
				test: /\.js$/, 
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					presets: ["env", "react"],
					plugins: ["transform-class-properties"]
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
		// rules: [
		// 	{
		// 		test: /\.css$/,
		// 		use: [
		// 			{ loader: 'style-loader' },
		// 			{ loader: 'css-loader' },
		// 			{ loader: 'autoprefixer-loader' }

		// 		]
		// 	}
		// ]
	}
}
