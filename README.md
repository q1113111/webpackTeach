## 基礎教學設定 教學影片是4 用5的方式呈現

## packge.json

### 使用方式
#### webpack5輸出檔案需要判斷 開發模式還是產品模式
* build 產出輸出黨 
* dev 執行瀏覽器
#### 可以通過這樣設定開發還是產品
* "build": "webpack --mode=production --config ./webpack.config.js", 
* "dev": "webpack-dev-server --mode development --config ./webpack.config.js"

---
## src/index

### 教學 webpack.config
* mode 兩種模式 development production
* entry 要編譯的檔案
* output 要輸出的檔案
* devServer 設定瀏覽器輸出的路徑和port
* module

### module介紹 loader
* rules是使用規則 
* test:需要載入的檔案
* use:使用的套件

### css載入
* 需要安裝 npm install --save-dev css-loader style-loader  這樣webpack才能看得懂
* 使用module 轉譯 webpack看得懂的語言

### 產生html檔
* 安裝 npm install --save-dev html-webpack-plugin
