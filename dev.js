const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//
module.exports = function e(env) {
  return {
    entry: {
      vendor: [
        // "jquery",
        // "hammerjs",
        "./node_modules/materialize-css/dist/js/materialize",
        "./node_modules/materialize-css/dist/css/materialize.css",
        // "materialize-css",
        "./js/offlineRuntimeInstall"
      ],
      app: "./app.js"
    },
    output: {
      path: __dirname + "/public",
      filename: "./1/[name].[hash].js"
    },
    stats: {
      warnings: false
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        // {
        //   test: /indexB.html$/,
        //   loaders: [
        //     "file-loader?name=index.[ext]",
        //     "extract-loader",
        //     "html-loader"
        //   ]
        // },

        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=1/[name].[hash].[ext]",
            {
              loader: "image-webpack-loader",
              options: {
                gifsicle: {
                  interlaced: false
                },
                // optipng: {
                //   optimizationLevel: 7
                // },
                pngquant: {
                  quality: "65-90",
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 65
                }
                // Specifying webp here will create a WEBP version of your JPG/PNG images
                // webp: {
                //   quality: 75
                // }
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2|ico)$/,
          loader: "url-loader?limit=1000000"
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/]
          // use: [
          //   {
          //     loader: "babel-loader?cacheDirectory",
          //     options: {
          //       presets: [["env", { modules: false }]]
          //     }
          //   }
          // ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Publicine",
        template: "index.ejs"
      }),
      // ... other plugins
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        // filename: "build/vendor.bundle.[chunkhash].js",
        // (Give the chunk a different name)

        minChunks: Infinity
        // (with more entries, this ensures that no other module
        //  goes into the vendor chunk)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      })
    ]
  };
};
