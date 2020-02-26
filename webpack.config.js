const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv =require ('dotenv-webpack');

module.exports = env => {
  return {
    mode:"development",
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: path.resolve(__dirname, 'src/assets/images'),
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src/assets/css'),
        use: ['style-loader', 'css-loader'],
      },
    ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devServer: {
      contentBase:  path.resolve(__dirname, 'public/'),
      historyApiFallback: true,
      port: 9000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new Dotenv({
        path: './.env',
        safe: true,
        systemvars: true,
        silent: true,
        defaults: false,
      }),
    ],
    node: {
      fs: 'empty'
    }
  }
};
