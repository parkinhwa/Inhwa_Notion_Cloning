const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ template: "./src/index.html" }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
};
