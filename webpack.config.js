const webpack = require('webpack');

const DEV = process.env.NODE_ENV==='development';
const PROD = process.env.NODE_ENV==='production';

const config = {
  entry: ['./src'],
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  devtool: !PROD ? 'source-map' : null,
  devServer: {
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['', '.html', '.js']
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
    ]
  }
};

if(!DEV){
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compressor: {
        warnings: true
      }
    })
} else {
  config.entry.push('webpack/hot/dev-server');
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config;
