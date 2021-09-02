const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  // 模式 development production
  mode: "development",
  //要編譯的檔案
  entry: "./src/index.js",
  //要輸出的檔案
  output: {
    path: path.resolve(__dirname, "dist"), //輸出的資料夾名稱
    filename: "main.[hash].bundle.js", //輸出的檔案名稱 加入[hash] 自動產生亂碼
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  devtool:'source-map',
  // 使用的套件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "main.html",
    }),
    new MiniCssExtractPlugin({
      filename:'main.[hash].css'
    }),
  ],
  // 輸出的模組檔案
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ['style-loader', "css-loader"], 會放在<style>標籤裡 幾乎不會用這個
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ],
  },
};
