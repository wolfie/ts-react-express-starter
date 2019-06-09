const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "..", "dist", "public"),
    filename: "app.bundle.js"
  },
  mode: "production"
});
