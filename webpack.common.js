const path = require("path");
const { HtmlWebpackPlugin } = require("html-webpack-plugin");

module.exports = {
  entry: { bundle: path.resolve(__dirname, "./src/app.js") },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
