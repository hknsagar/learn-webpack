const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "production.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        // use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "production.[hash].css" })],
  devtool: "source-map",
};

module.exports = merge(commonConfig, prodConfig);
