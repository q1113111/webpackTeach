//loader 本質上 是一個函數
//同步
// module.exports = function (content, map, meta) {
//     console.log(111)
//     return content
// }
module.exports =function(content,map,meta){
    console.log(111)
    //第一個為錯誤訊息 通常三四不會傳
    this.callback(null,content,map,meta)
}
module.exports.pitch = function(){
    console.log('pitch 111')
}