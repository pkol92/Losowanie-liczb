const path = require("path");
const { HtmlWebpackPlugin } = require("html-webpack-plugin");

module.exports = {
  entry: { bundle: path.resolve(__dirname, "./src/app.js") },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      { test: /\.svg$/, use: "svg-inline-loader" },
    ],
  },
};
