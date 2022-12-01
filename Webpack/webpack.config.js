const HtmlWebpackPlugin = require("html-webpack-plugin");

function configFactory(_, { mode }) {
  /** @type {import("webpack").Configuration} */
  const config = {
    devtool: mode !== "production" ? "source-map" : false,
    entry: "./src/index.ts",
    output: {
      clean: true,
      filename: "app.[contenthash].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
        },
      ],
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
      // Add support for TypeScripts fully qualified ESM imports.
      extensionAlias: {
       ".js": [".js", ".ts"],
       ".cjs": [".cjs", ".cts"],
       ".mjs": [".mjs", ".mts"]
      }
    },
  };

  return config;
}

module.exports = configFactory;
