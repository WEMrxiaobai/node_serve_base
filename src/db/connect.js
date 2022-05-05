const mysql = require('mysql');
const { MYSQL_CONFIG } = require('../config/db');
//创建连接对象  
var conn = mysql.createConnection(MYSQL_CONFIG);
// 开始连接  
conn.connect();
console.log("[connect] connect mysql");
// 重新连接
function Reconn() {
    conn.on('error', err => {
        console.log("[connect] err ", err, new Date());
        conn = mysql.createConnection(MYSQL_CONFIG);
        setTimeout(() => {
            Reconn()
            console.log('[connect] 重新连接 mysql');
        }, 1000);
    })
}
Reconn();
let errorMsg
function execSQL(sql) {
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) { // 返回err信息
                errorMsg = {
                    'code': err.code,
                    'errno': err.errno,
                    'sqlMessage': err.sqlMessage,
                    'sqlState': err.sqlState
                };
                reject(err);
            } else {
                //正常执行
                resolve(result);
            }
        })
    }).catch(() => {
        // 对catch处理
        console.log("[sql] 执行sql 错误 errorMsg", errorMsg);
        return errorMsg;
    })
}

module.exports = {
    execSQL
}

