let Mock = require("mockjs")
let arrs = ["拉篮", "胖子", "小红", "小兰", "笑话"]
Mock.mock("/api/home", arrs)
Mock.mock("/api/person", ["haj", "haj", "haj", "haj", "haj"])
Mock.mock("/api/sons", ["haj", "haj", "haj", "haj", "haj"])
Mock.mock(/\/api\/delete\/\d/, 'delete', function (obj) {
    console.log('obj的地址', obj)
    let url = obj.url
    let urlarr = url.split("/")
    console.log('urlarr', urlarr)
    let id = urlarr.pop()//提取最后一个元素
    console.log(id)
    arrs.splice(id, 1)//删除选中的元素
    return {
        status: "200",
        message: "删除成功",
        data: arrs
    }
})
Mock.mock("/api/post", "post", (config) => {
    return {
        message: "成功了"
    }
})
Mock.mock("/api/put", "put", (config) => {
    return {
        message: "成功了"
    }
})







// let Mock = require("mockjs")
// let arrs = ["xiaoshuang","saijun","xiaotao","lichi"]
// Mock.mock("/api/home","get",(config)=>{
//     console.log(config)
//     return arrs
// })
// Mock.mock("/api/person",["小双","军军","涛涛","小李子"])
// Mock.mock("/api/sons",["小小双","小军军","小涛涛","小池池"])
// "/api/delete/2"
// Mock.mock(/\/api\/delete\/\d/,'delete',function(obj){
//     console.log(obj.url)// 参数就在这里
//     let url = obj.url
//     let urlarr = url.split("/")
//     let id = urlarr.pop() // 提取最后一个元素
//     console.log(id)
//     arrs.splice(id,1)// 删除选中的元素
//     return {status:200,message:"删除成功",data:arrs}
// })
// Mock.mock("/api/post",'post',(config)=>{
//     console.log(config)
//     return {
//         message:"成功了"
//     }
// })
// Mock.mock("/api/put",'put',(config)=>{
//     console.log(config)
//     return {
//         message:"成功了"
//     }
// })



// let Mock = require("mockjs")
// let arrs = ["xiaosan", "dalu", "theShy", 'rookie', "Ning"]
// Mock.mock("/api/home", arrs)
// Mock.mock("/api/person", ["小双", "军军", "大双", "小李子"])
// Mock.mock("/api/sons", ["小单", "大单", "嗨害", "来了嗷"])
// "/api/delete"
// Mock.mock(/\/api\/delete\/\d/, "delete", function (obj) {
//     console.log(obj.url);
//     let url = obj.url
//     let urlarr = url.split('/')
//     let id = urlarr.pop() //提取最后一个元素
//     arrs.splice(id, 1) //删除选中的元素
//     console.log(id);
//     return { status: 200, message: "删除成功", data: arrs }
// })
// Mock.mock("/api/post", "post", (config) => {
//     console.log(config);
//     return {
//         message: "成功了"
//     }
// })
// Mock.mock("/api/put", "put", (config) => {
//     console.log(config);
//     return {
//         message: "成功了"
//     }
// })
