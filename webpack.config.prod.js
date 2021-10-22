const { urls, merge } = require("@oeduardoal/microfrontend-config");
const webpack = require("./webpack.config.base");

const env = process.env.ENV || "dev";

const { consumer } = urls[env];

/** @type { import('webpack').Configuration } */
module.exports = merge.merge(webpack, {
  devtool: false,
  output: {
    publicPath: consumer.url,
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "[name].[chunkhash:8].js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
});
