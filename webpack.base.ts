const HtmlPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const magicImporter = require("node-sass-magic-importer");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
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
  ],
};
