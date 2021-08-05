const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  target: "web",
  devServer:{
    
    port:"9500",
    contentBase: ["./App"],
    open:true
  },
  resolve:{
    extensions: [".js",".jsx",".json"]
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      /*Choose only one of the following two: if you're using 
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.css$/,
        use:[
          "style-loader",
          "css-loader",
          "postcss-loader"
        ],
      },
    ], 
  },  
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html"
    }),
    new CleanWebpackPlugin({cleanAfterEveryBuildPatterns:['dist']})
  ]
}