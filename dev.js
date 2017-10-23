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
    devtool: "cheap-module-eval-source-map",
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
          test: /embedEnB.html$/,
          loaders: [
            "file-loader?name=embedEn.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=[path][name].[ext]",
            {
              loader: "image-webpack-loader",
              options: {
                gifsicle: {
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 7
                },
                pngquant: {
                  quality: "65-90",
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // Specifying webp here will create a WEBP version of your JPG/PNG images
                webp: {
                  quality: 75
                }
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: "file-loader?name=[path][name].[ext]"
        },
        // {
        //   test: /\.svg$/,
        //   use: [
        //     {
        //       loader: "file-loader?name=[path][name].[ext]"
        //     }
        //   ]
        // },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader",
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
