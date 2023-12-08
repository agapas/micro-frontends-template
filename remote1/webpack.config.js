const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote1",
      filename: "remoteEntry.js",
      exposes: {
        "./Remote1Display": "./src/bootstrap",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
