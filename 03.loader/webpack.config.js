const path = require('path');
module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            // 單一執行一個loader.js
            // loader: path.resolve(__dirname, 'loaders', 'loader1')
            // loader: 'loader1'

            //執行多個loaders 並且由後往前直行
            use: [
                'loader1',
                'loader2',
                {
                    loader:'loader3',
                    options:{
                        name:'jack',
                        //如果additionalProperties為false 則不能添加其他型別
                        age:18
                    }
                }
            ]
        }]
    },
    // 配置loader解析
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'loaders')
        ]
    }
}