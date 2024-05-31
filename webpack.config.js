const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	entry: './input.css',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								"plugins": {
									"@csstools/postcss-global-data": {
										"files": ["./mixin.css"]
									},
									"postcss-advanced-variables": {},
									"postcss-preset-env":{
										"stage":0,"features":{"custom-properties":false}
									},
								},
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'output.css',
		}),
	],
}
