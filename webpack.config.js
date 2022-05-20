const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv").config();

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
