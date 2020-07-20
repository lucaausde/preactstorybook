const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(require("./webpack.base"), {
  plugins: [
    new HardSourceWebpackPlugin({
      cachePrune: {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        sizeThreshold: 50 * 1024 * 1024,
      },
    }),
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    host: "0.0.0.0",
    port: 3000,
    hot: false,
    inline: true,
    liveReload: true,
    open: "Safari",
    historyApiFallback: true,
    onListening: function(server) {
      const port = server.listeningApp.address().port;
      console.log("Listening on port:", port);
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "*": "localhost",
    },
  },
});
