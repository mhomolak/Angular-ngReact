const webpack = require('webpack');

const DEV = process.env.NODE_ENV==='development';

module.exports = {
  entry: ['./src', 'webpack/hot/dev-server'],
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  devtool: '#inline-source-map',
  devServer: {
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['', '.html', '.js', '.json', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.html/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader!"
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  }
};
