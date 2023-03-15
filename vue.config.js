"use strict";

const path = require("path");
const config = require("./config");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const NODE_ENV = process.env.NODE_ENV || "development";
console.log("config:", config, "node-env:", NODE_ENV);
const { mockUrl } = config[NODE_ENV];

const isDev = NODE_ENV === "development";

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: isDev,
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/dev-api": {
        target: mockUrl,
        pathRewrite: {
          "^/dev-api": "/",
        },
        secure: false,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
    name: "kpr-h5-app",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};
