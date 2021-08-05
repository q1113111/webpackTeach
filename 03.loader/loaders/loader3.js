//loader 本質上 是一個函數
//獲取options
const {getOptions} =require('loader-utils')
const {validate} = require('schema-utils')

const schema = require('./schema.json')
module.exports = function (content, map, meta) {
    //獲取options
    const options = getOptions(this)
    console.log(333,options)

    //驗證options 是否為正確型別
    validate(schema,options,{
        name:'loader3'
    })
    return content
}
module.exports.pitch = function () {
    console.log('pitch 333')
}