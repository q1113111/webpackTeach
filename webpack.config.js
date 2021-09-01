const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  plugins: [new HtmlWebpackPlugin()],
  // 要使用的套件
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
