const path = require("path");

module.exports = {
  //要編譯的檔案
  entry: "./src/index.js",
  //要輸出的檔案
  output: {
    path: path.resolve(__dirname, "dist"), //輸出的資料夾名稱
    filename: "main.bundle.js", //輸出的檔案名稱
  }, 
   devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000
  }
};
