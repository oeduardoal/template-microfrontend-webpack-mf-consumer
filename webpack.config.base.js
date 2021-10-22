const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { webpack, urls, merge } = require("@oeduardoal/microfrontend-config");
const deps = require("./package.json").dependencies;

const env = process.env.ENV || "dev";

const { account, header } = urls[env];

/** @type { import('webpack').Configuration } */
module.exports = merge.merge(webpack);
