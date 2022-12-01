const HtmlWebpackPlugin = require("html-webpack-plugin");

function configFactory(_, { mode }) {
  /** @type {import("webpack").Configuration} */
  const config = {
    devtool: mode !== 'production' ? 'source-map' : false,
    entry: './src/js/index.js',
    output: {
      clean: true,
      filename: 'app.[contenthash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
    // entry
    // output
    // plugins
    // module
    // mode
  };

  return config;
}

module.exports = configFactory;
