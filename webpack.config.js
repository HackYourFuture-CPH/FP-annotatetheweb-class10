const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

const outputDirectory = "dist";

module.exports = () => {
  return {
    entry: ["babel-polyfill", "./src/client/index.js"],
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
          loader: "url-loader?limit=100000"
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
      publicPath: "/",
      historyApiFallback: true,
      port: parseInt(process.env.CLIENT_PORT, 10),
      open: process.env.OPEN_BROWSER === "true" ? true : false,
      proxy: {
        "/api": `http://localhost:${process.env.API_PORT}`
      }
    },
    node: {
      net: "empty",
      tls: "empty",
      dns: "empty",
      fs: "empty"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico"
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.parsed)
      }),
    ]
  };
};
