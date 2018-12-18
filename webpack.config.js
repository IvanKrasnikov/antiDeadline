const path = require("path");

module.exports = {
	mode: "development",
	entry: [
		path.join(__dirname, "src/js/index.js"),
		path.join(__dirname, "src/css/style.css")
	],

	output: {
		path: path.join(__dirname, "src/assets"),
		filename: "index.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: [
								require("postcss-preset-env")(),
								require("postcss-nested")
							]
						}
					}
				]
			}
		]
	}
};
