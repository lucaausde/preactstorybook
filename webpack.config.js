const HtmlPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const magicImporter = require("node-sass-magic-importer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: "./src/",
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    devtool: "source-map",
    resolve: {
      extensions: [".mjs", ".js", ".tsx", ".ts", ".jsx", ".json"],
      modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
    },
    output: {
      filename: "static/js/[name].[hash].js",
      path: path.join(__dirname, "build"),
      chunkFilename: "static/js/[name].[id].[hash].js",
    },
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, use: "ts-loader" },
        { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
        {
          test: [[/\.css$/], [/\.s[ac]ss$/i]],
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                import: true,
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                sassOptions: {
                  importer: magicImporter(),
                },
              },
            },
          ],
        },
        {
          test: /\.(png|tiff|jp(e)g|gif|mp4|svg|ttf|woff(2)|eot|ico)$/,
          use: [
            {
              loader:
                process.env.NODE_ENV === "production"
                  ? "file-loader"
                  : "url-loader",
              options: {
                outputPath: "static/assets",
                name: "[name].[hash].[ext]",
              },
            },
          ],
        },
        {
          test: /\.json$/,
          use: "json-loader",
        },
        {
          test: /\.(xml|html|txt|md)$/,
          use: "raw-loader",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlPlugin({
        template: path.join(__dirname, "public/index.html"),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public",
            globOptions: {
              ignore: ["index.html"],
            },
          },
        ],
      }),
      new Dotenv({
        path: "./.env",
        allowEmptyValues: true,
        safe: false,
        silent: process.env.NODE_ENV === "development" ? false : true,
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[hash].css",
        chunkFilename: "static/css/[name].[id].[hash].css",
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
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
      new CompressionPlugin({ algorithm: "gzip" }),
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.css$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
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
  };
};
