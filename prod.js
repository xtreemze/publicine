//   .default;
// import ImageminPlugin from "imagemin-webpack-plugin";
const OfflinePlugin = require("offline-plugin");
const HtmlMinifierPlugin = require("html-minifier-webpack-plugin");
const ClosureCompiler = require("google-closure-compiler-js").webpack;
// const OptimizeJsPlugin = require("optimize-js-plugin");
// const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const PurifyCSSPlugin = require("purifycss-webpack");
// const glob = require("glob-all");
//
module.exports = function prod(env) {
  return {
    entry: "./entry.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    stats: {
      warnings: false
    },
    devtool: "cheap-source-map",
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
            "file-loader?name=build/[name].[ext]",
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
    },
    plugins: [
      new HtmlMinifierPlugin({}),

      new ClosureCompiler({
        compiler: {
          language_in: "ECMASCRIPT6",
          language_out: "ECMASCRIPT5",
          compilation_level: "ADVANCED",
          warning_level: "QUIET",
          externs: [
            {
              src: `
                      var jQuery = {};
                      
                      var $ = {}  

                      Materialize.toast();
               `
            }
          ]
        },
        makeSourceMaps: true,
        concurrency: 4
      }),
      // new ExtractTextPlugin("[name].css"),
      // new PurifyCSSPlugin({
      //   minimize: true,
      //   verbose: true,
      //   // Give paths to parse for rules. These should be absolute!
      //   paths: glob.sync([
      //     path.join(__dirname, "*.html"),
      //     path.join(__dirname, "js/*.js")
      //   ])
      // }),
      new OfflinePlugin({
        externals: [
          // "./js/materialize.min.js",
          //  "./js/jquery-3.2.1.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css",
          "https://code.jquery.com/jquery-3.2.1.min.js",
          "https://fonts.googleapis.com/icon?family=Material+Icons",
          "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"
        ],
        caches: "all",
        responseStrategy: "network-first",
        updateStrategy: "all",
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
