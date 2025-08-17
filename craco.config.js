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
      console.log("Webpack configuration:", env);

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new ModuleFederationPlugin({
          name: "reactAppContainer",
          remotes: {
            marketingMF: env==="development"?"mfMarketing@http://localhost:3001/remoteEntry.js":"mfMarketing@https://reactappmf2-hdcudkgxh8d5acdj.malaysiawest-01.azurewebsites.net/remoteEntry.js",
          },
          shared: dependencies,
        }),
      ];

      return webpackConfig;
    },
  },
};
