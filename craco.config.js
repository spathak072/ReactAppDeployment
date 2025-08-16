// craco.config.js
const { container } = require("webpack");
const { ModuleFederationPlugin } = container;
const {dependencies} = require("./package.json")

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
        webpackConfig.output.publicPath = "auto";
      // Change the output directory for the build in production
      if (env === "production") {
        webpackConfig.output.path = paths.appBuild;
      }

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new ModuleFederationPlugin({
          name: "reactAppContainer",
          remotes: {
            marketingMF: "mfMarketing@http://localhost:3001/remoteEntry.js",
          },
          shared: dependencies,
        }),
      ];

      return webpackConfig;
    },
  },
};
