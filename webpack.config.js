const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { webpack, urls } = require("@oeduardoal/microfrontend-config");

const env = process.env.ENV || "dev";

const {
  consumer: { url: publicPath, port },
  account,
} = urls[env];

/** @type { import('webpack').Configuration } */
module.exports = {
  ...webpack,
  output: {
    publicPath,
  },
  devServer: {
    port,
  },
  plugins: [
    ...webpack.plugins,
    new ModuleFederationPlugin({
      name: "consumer",
      filename: "remoteEntry.js",
      remotes: {
        account: `account@${account.url}remoteEntry.js`,
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
