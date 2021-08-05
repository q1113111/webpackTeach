const {getOptions} = require('loader-utils')
const {validate} = require('schema-utils')
const babelSchema = require('./babelschema.json') 
module.exports = function(content,map,meta){
    // 獲取loader的options配置
    const options = getOptions(this) || {}

    //驗證babel的options
    validate(babelSchema,options,{
        name:'Babel Loader'
    })

    //創建異步
    const callback = this.async();
}