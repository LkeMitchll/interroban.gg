const path = require("path");

module.exports = {
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "_site/js"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
