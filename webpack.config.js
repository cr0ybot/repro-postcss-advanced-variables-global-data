module.exports = {
	entry: './entry.css',
	output: {
		filename: 'output.css',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
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
}
