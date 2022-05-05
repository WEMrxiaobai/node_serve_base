var express = require('express');
// 引入Express路由对象
var router = express.Router();
//首页路由
router.get('/', function(req, res, next) {
  res.send('index 显示');
});

module.exports = router;
