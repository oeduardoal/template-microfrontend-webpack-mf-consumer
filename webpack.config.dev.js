const path = require("path");
const { urls, merge } = require("@oeduardoal/microfrontend-config");
const webpack = require("./webpack.config.base");
const env = process.env.ENV || "dev";

const { consumer } = urls[env];

/** @type { import('webpack').Configuration } */
module.exports = merge.merge(webpack, {
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    publicPath: "auto",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: consumer.port,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
});
