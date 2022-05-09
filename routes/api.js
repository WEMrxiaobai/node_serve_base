var express = require('express');
var apiController = require('../src/controllers/api')

var router = express.Router();

/* api */
router.get('/', function (req, res, next) {
    let query = req.query
    console.log(query);
    res.send(query);
});

router.get('/select',async function (req, res, next) {
    res.send(await apiController.selectVideo())
});

router.get('/selectID',async function (req, res, next) {
    res.send(await apiController.selectVideoID(req))
});




module.exports = router;
