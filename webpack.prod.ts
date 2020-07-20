const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
var OfflinePlugin = require("offline-plugin");

module.exports = merge(require("./webpack.base"), {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      fileName: "asset-manifest.json",
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter(
          (fileName) => !fileName.endsWith(".map")
        );

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }],
      },
      canPrint: true,
      map: {
        inline: false,
        annotation: true,
      },
    }),
    new CompressionPlugin({ algorithm: "gzip" }),
    new OfflinePlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `module.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
});
