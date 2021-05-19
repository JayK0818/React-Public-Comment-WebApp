const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:path.join(__dirname,'src/index.js'),
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:[{
          loader:"babel-loader",
          options:{
            presets:['@babel/preset-env','@babel/preset-react']
          }
        }]
      },
      {
        test:/\.(jpg|jpeg|png|svg|gif)$/,
        type:"asset/resource"
      }
    ]
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    },
    extensions:['.js','.jsx'],
    mainFiles:['index'],
    modules:[path.resolve(__dirname,'src'),'node_modules']
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"大众点评",
      template:path.resolve(__dirname,'src/public/index.html'),
      minify:true,
      filename:'index.html',
      hash:true
    })
  ],
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:3000'
      }
    }
  }
}