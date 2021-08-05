//loader 本質上 是一個函數
// module.exports = function (content, map, meta) {
//     console.log(222)
//     return content
// }
//異步
module.exports =function(content,map,meta){
    console.log(222)
    const callback = this.async()
    setTimeout(()=>{
        callback(null,content)
    },1000)
}

module.exports.pitch = function () {
    console.log('pitch 222')
}