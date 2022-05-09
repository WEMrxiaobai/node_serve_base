/**
 * 方法类 
 */

const jwt = require("jsonwebtoken");
const { web_config } = require("../config/config");

/**
 * 获取本机ip地址
 * @returns ipv4地址
 */
function getIPAdress() {
  var interfaces = require("os").networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}

/**
 * 生成token
 * @param {uid}  uid用户
 * @param {scope} scope等级
 * @returns token值
 */
function generateToken(uid, scope) {
  const token = jwt.sign({ uid, scope }, web_config.secretKey, {
    expiresIn: web_config.DesTime,
  });
  return token;
}

/**
 * 验证token
 * @param {token} 传入token
 * @returns 是否正确
 */
function verifyToken(token) {
  try {
    return jwt.verify(token, web_config.secretKey);
  } catch (e) {
    return false;
  }
}
module.exports = {
  getIPAdress,
  generateToken,
  verifyToken,
};
