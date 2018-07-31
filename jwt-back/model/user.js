// 操作数据库的逻辑
let mongoose = require('mongoose');
// 链接数据库 27017默认  27128 
let { db_url } = require('../config');
mongoose.connect(db_url,{useNewUrlParser:true});
// 创建一个骨架Schema
let UserSchema  = new mongoose.Schema({
    username:String,
    password:String
});

// 对外暴露模型  
 /*
    model()方法,将Schema编译为Model。model()方法的第一个参数是模型名称.
    [注意]一定要将model()方法的第一个参数和其返回值设置为相同的值.
 */
module.exports = mongoose.model('User',UserSchema);


