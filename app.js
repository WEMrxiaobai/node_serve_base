var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var { getIPAdress } = require("./src/models/model")

// 路由规则
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
// 创建服务器实例
var app = express()
var port = 3000
// 日志
app.use(logger('short'));
// 中间件，解析表单中的 JSON 格式的数据 定义JSON格式处理数据
app.use(express.json());
// 解析 URL-encoded 格式的请求体数据
app.use(express.urlencoded({ extended: false }));
// 定义静态资源目录public
app.use(express.static(path.join(__dirname, 'public')));

// 使用路由规则
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter)

// 捕获 404 并转发到错误处理程序
app.use(function (req, res, next) {
    res.send("<div style='padding:80px;'><h1>404</h1><h2>Not Found</h2></div>")
    next(createError(404));
});

// 错误处理
app.use(function (err, req, res, next) {
    //设置本地人，只提供开发中的错误
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // 呈现错误页面
    res.status(err.status || 500);
    res.render('error');
});

// 启动服务器
app.listen(port, () => {
    console.log(`[serve] 服务启动 访问地址: http://${getIPAdress()}:${port}`);
})