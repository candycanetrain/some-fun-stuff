var webpack = require('webpack');

module.exports = {
  entry: './index.jsx',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/], // Specifies file types to transpile
        exclude: /(node_modules)/, // Leaves dependencies alone
        loader: 'babel-loader', // Sets Babel as the transpiler
        query: {
          presets: ['es2015', 'react'] // Tells Babel what syntaxes to translate
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
