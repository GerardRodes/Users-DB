var path = require('path')

module.exports = {
	resolve: {
		extensions: ['.js', '.test.js']
	},
	context: __dirname,
  target: 'web',
	entry: path.join(__dirname, 'test', 'tests.js'),
	output: {
		path: path.join(__dirname, 'test'),
		filename: 'testsBundle.js'
	},
	module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
		]
	}
}