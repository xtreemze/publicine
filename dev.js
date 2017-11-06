module.exports = function dev(env) {
  return {
    entry: "./entry.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    stats: {
      warnings: false
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /indexB.html$/,
          loaders: [
            "file-loader?name=index.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=[path][name].[ext]",
            {
              loader: "image-webpack-loader",
              options: {}
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: "url-loader?limit=1000000"
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader?cacheDirectory",
              options: {
                presets: [["env", { modules: false }]]
              }
            }
          ]
        }
      ]
    }
  };
};
