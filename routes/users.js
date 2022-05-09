var express = require('express');
var router = express.Router();

/**
 * 用户方法
 */
router.get('/', function(req, res, next) {
  res.send(await apiController.selectVideoID(req))
});
router.get('/selectID',async function (req, res, next) {
  res.send(await apiController.selectVideoID(req))
});

module.exports = router;
