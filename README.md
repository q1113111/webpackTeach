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


### 教學 webpack.config
* mode 兩種模式 development production
* entry 要編譯的檔案
* output 要輸出的檔案
* devServer 設定瀏覽器輸出的路徑和port
* module 輸出的模組檔案
* plugins 使用的套件配置
* devtool 瀏覽器顯示的設定

### module介紹 loader
* rules是使用規則 
* test:需要載入的檔案
* use:使用的套件

### css載入
* 需要安裝 npm install --save-dev css-loader style-loader mini-css-extract-plugin 這樣webpack才能看得懂
* 使用module 轉譯 webpack看得懂的語言
* mini-css-extract-plugin 使css獨立出來
* 壓縮 CSS npm install css-minimizer-webpack-plugin --save-dev
* 要同步更新 dev 須加入  target:'web',

### scss載入
* npm install sass-loader sass --save-dev

### 產生html,css,檔

<font color="#FF0000">新增任何檔案 都使用這種形式</font>


* 安裝 npm install --save-dev html-webpack-plugin
* 針對裡面參數可設置許多功能 參考 https://github.com/jantimon/html-webpack-plugin#plugins

### babel引入
* npm install --save-dev babel-loader @babel/core @babel/preset-env --save-dev
* 獨立出一個babel.config.js 放入option
 
### 加入圖檔
* 搜尋assetsModule

### 壓縮 js，根據設定也可去除 console 等等
* npm install terser-webpack-plugin --save-dev

