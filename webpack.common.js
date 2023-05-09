const path = require("path");
const { HtmlWebpackPlugin } = require("html-webpack-plugin");
const miniSVGDataURI = require("mini-svg-data-uri");

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
      {
        test: /\.(woff|woff2|eot|ttf|jpg)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "svg-inline-loader",
            options: {
              generator: (content) => miniSVGDataURI(content.toString()),
            },
          },
        ],
      },
    ],
  },
};
