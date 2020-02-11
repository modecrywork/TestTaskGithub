const path = require("path");

const webpack = require("webpack");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// development settings
const isDev = process.env.NODE_ENV === "development";
const port = isDev ? 9000 : 9001;
/*
  plugins configs
*/
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, `templates/index.html`),
  filename: "index.html",
  inject: "body"
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin({
  verbose: true
});

/*
 *  webpack development configs
 * */
const baseConfig = {
  entry: "./index.js",
  output: {
    path: path.resolve("build"),
    filename: "index_bundle.js"
  },
  devServer: {
    contentBase: path.resolve("./dist"),
    port: port,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, CleanWebpackPluginConfig],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/")
    }
  }
};

const devConfg = {
  devtool: "eval-sourcemap"
};

const productionConfig = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        extractComments: true,
        terserOptions: {
          ecma: 5,
          ie8: false,
          compress: true,
          warnings: true
        }
      })
    ]
  }
};

// get target config
let targetConfig;

if (isDev) {
  targetConfig = { ...baseConfig, ...devConfg };
} else {
  const plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ];
  targetConfig = { ...baseConfig, ...productionConfig };
  targetConfig.plugins = [...targetConfig.plugins, ...plugins];
}

module.exports = targetConfig;
