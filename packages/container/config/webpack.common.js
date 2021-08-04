const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, '../src/components/')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]

}
