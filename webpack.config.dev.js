const { urls } = require("@oeduardoal/microfrontend-config");
const webpack = require("./webpack.config");

const env = process.env.ENV || "dev";

const { consumer } = urls[env];

/** @type { import('webpack').Configuration } */
module.exports = {
  ...webpack,
  output: {
    ...webpack.output,
    publicPath: consumer.url,
  },
  devServer: {
    port: consumer.port,
    historyApiFallback: true,
  },
};
