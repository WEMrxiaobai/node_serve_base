const mysql = require("mysql");
const { MYSQL_CONFIG } = require("../config/db");
console.log("[connect] enter connect mysql", new Date());
var conn;
/**
 * 数据库连接
 */
function connect() {
  //创建连接对象
  conn = mysql.createConnection(MYSQL_CONFIG);
  // 开启连接
  conn.connect();
  // console.log("------------conn0------------------",conn);
  conn.on("error", (err) => {
    console.log("[connect] 断开链接 err ", err, new Date());
    // console.log("--------conn1-----------------------",conn);
    Reconn();
  });
}
connect();

// 重新连接
function Reconn() {
  try {
    console.log("[connect] 尝试重连 ", new Date());
    setTimeout(() => {
      conn = mysql.createConnection(MYSQL_CONFIG);
      conn.connect();
      console.log("[connect] 已重新连接 mysql", new Date());
      conn.on("error", (err) => {
        console.log("[connect] 断开链接 err ", err, new Date());
        Reconn();
      });
    }, 1000);
  } catch (error) {
    console.log("[connect]  Reconn error ", error, new Date());
  }
}

let errorMsg;
function execSQL(sql) {
  return new Promise((resolve, reject) => {
    conn.query(sql, (err, result) => {
      if (err) {
        // 返回err信息
        errorMsg = {
          code: err.code,
          errno: err.errno,
          sqlMessage: err.sqlMessage,
          sqlState: err.sqlState,
        };
        reject(err);
      } else {
        //正常执行
        resolve(result);
      }
    });
  }).catch(() => {
    // 对catch处理
    console.log("[sql] 执行sql 错误 errorMsg", errorMsg);
    return errorMsg;
  });
}

module.exports = {
  execSQL,
};
