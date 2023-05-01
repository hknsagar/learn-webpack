const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "development.js",
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
  devtool: "eval-source-map",
};

module.exports = merge(commonConfig, devConfig);
