const config = require("./webpack.config.js");
const {merge} = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config,{
  mode:"production",
  output:{
    filename:"[name].[contenthash:8].js",
    path:path.join(__dirname,'src/dist'),
    clean:true,    // 每次打包构建时清除dist文件
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[name].[contenthash:8].js'
    })
  ]
})