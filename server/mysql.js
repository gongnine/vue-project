// 连接数据库
//引入
const mysql = require("mysql");
//创建连接对象
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  // port:3306,
  database: "buy",
});

//封装数据库操作语句
function sqlFun(sql, arr, callback) {
  connection.query(sql, arr, function (error, result) {
    if (error) {
      console.log("数据库语句错误");
      return;
    }
    callback(result);
  });
}

module.exports = sqlFun;

//连接
// connection.connect();
//执行语句

//关闭连接
// connection.end();
