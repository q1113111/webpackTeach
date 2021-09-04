const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin');
const path = require('path')


module.exports = (env, argv) => {
  // console.log(argv)
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
    const css =  new MiniCssExtractPlugin({
      filename: '[name].min.css'
    })
    config.plugins.push(css)
  }

  if (argv.mode === 'production') {
    const css =  new MiniCssExtractPlugin({
      filename: '[name].[hash].min.css'
    })
    const ter =  new TerserPlugin({
      extractComments: 'all',
      terserOptions: {
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true
        }
      }
    })
    config.plugins.push(css)
    config.optimization.minimizer.push(ter)
  }

  return config
}

const config = {
  //要編譯的檔案
  entry: ['./src/index.js','./src/test.js'],
  //要輸出的檔案
  output: {
    path: path.resolve(__dirname, 'dist'), //輸出的資料夾名稱
    chunkFilename: 'main.min.js',
    filename: '[name].[hash].bundle.js', //輸出的檔案名稱 加入[hash] 自動產生亂碼
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  target: 'web',
  // 使用的套件配置

  // 輸出的模組檔案
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        // 會放在<style>標籤裡 幾乎不會用這個
        // use: ['style-loader', "css-loader","sass-loader"],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        // use: [
        //   devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        //   'css-loader',
        //   'sass-loader'
        // ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ]
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ]
}
