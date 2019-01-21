const path = require("path");

// loader = an action each time a file is treated
// babel-core is the equivalent of babel-cli

module.exports = {
  // entry:  "./src/playground/hoc.js",
  entry:  "./src/App.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      // This rule is to use babel only on some files
      loader: "babel-loader",
      // $ is to be sure that we are at the end
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      // To use several loaders
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  devServer: {
    // absolute path for index.html
    contentBase: path.join(__dirname, "public"),
    // To be sure that the server serves index.html each time 404 status comes back 
    // which is the case when you use /page in the url
    historyApiFallback: true
  },
  // Allows mapping the application to keep a track of the original source code
  devtool: "cheap-module-eval-source-map"
};