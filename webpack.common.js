const path = require('path')
const {CleanWebpackPlugin }= require('clean-webpack-plugin');  
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        app:"./src/index.js"
       
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "index"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
    ],
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}