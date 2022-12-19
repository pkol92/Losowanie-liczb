const path = require("path");
const { HtmlWebpackPlugin } = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
