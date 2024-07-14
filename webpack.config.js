const path = require('path');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/main.ts', // Adjust this to your entry file
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@hive': path.resolve(__dirname, 'src')
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'AlexDovzhanynScreeps', // You can name this anything you want
    libraryTarget: 'umd', // Universal Module Definition to support various module systems
    globalObject: 'this'
  },
};