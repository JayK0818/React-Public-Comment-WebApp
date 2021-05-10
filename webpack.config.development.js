const config = require("./webpack.config.js");  // 开发环境和生产环境通用配置
const {merge} = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(config,{
  mode:"development",
  devtool:"inline-source-map",
  output:{
    filename:"[name].bundle.js",
    path:path.join(__dirname,'src/index.js'),
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  },
  devServer:{
    host:'0.0.0.0',
    port:9090,
    contentBase:path.resolve(__dirname,'src/dist'),
    compress:true,
    historyApiFallback:true,
    progress:true,
    hot:true,
    overlay:{
      errors:true,
      warnings:true
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
})
