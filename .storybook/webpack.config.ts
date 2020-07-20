const magicImporter = require("node-sass-magic-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push(
    { test: /\.tsx?$/, exclude: /node_modules/, use: "ts-loader" },
    { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
    {
      test: [[/\.css$/], [/\.sass$/], [/\.scss$/]],
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
      use: "url-loader",
    },
    {
      test: /\.(xml|html|txt|md)$/,
      use: "raw-loader",
    }
  );
  config.plugins.push(new MiniCssExtractPlugin());

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
