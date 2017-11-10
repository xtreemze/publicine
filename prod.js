const OfflinePlugin = require("offline-plugin");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// const ClosureCompiler = require("google-closure-compiler-js").webpack;
const HtmlMinifierPlugin = require("html-minifier-webpack-plugin");
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
      entry: "./entry.js"
    },
    output: {
      path: __dirname + "/public",
      filename: "./[name].[chunkhash].js",
      chunkFilename: "[id].[chunkhash].js"
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
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  autoprefixer: false,
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              "postcss-loader"
            ]
          })
        },

        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=[path]/[name].[hash].[ext]",
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
          test: /\.(eot|ttf|woff|woff2)$/,
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
        template: "./indexB.html"
      }),
      new ExtractTextPlugin("styles.[chunkhash].css"),
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
      }),
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          output: {
            comments: false
          }
        }
      }),
      new HtmlMinifierPlugin({
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeEmtpyElements: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        minifyURLs: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true
      }),

      new OfflinePlugin({
        externals: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
        caches: "all",
        // responseStrategy: "network-first",
        responseStrategy: "cache-first",
        // updateStrategy: "all",
        updateStrategy: "changed",
        minify: "true",
        autoUpdate: 1000 * 60 * 60 * 2,
        ServiceWorker: {
          events: "true"
        },
        AppCache: {
          events: "true"
        }
      })
    ]
  };
};
