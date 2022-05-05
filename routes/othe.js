// https://blog.csdn.net/weixin_44242181/article/details/124244880
// router请求方式
// HTTP请求方式除了GET之外，还有POST、PUT等其他方式
// POST请求方式
router.post('/world', function(req, res, next) {
    res.render('index', { title: 'Hello World' });            // 渲染index页面
  });
  // PUT请求方式
  router.put('/world', function(req, res, next) {
    res.render('index', { title: 'Hello World' });            // 渲染index页面
  });
  // DELETE请求方式
  router.delete('/world', function(req, res, next) {
    res.render('index', { title: 'Hello World' });            // 渲染index页面
  });


// 请求对象Requset
// Request.url属性：获取请求地址
// 学习router中间件函数中的requset对象
router.get("/abcd", function(req, res, next) {
    console.log(req.url); // /abcd
});
router.get("/abcd/abc", function(req, res, next) {
    console.log(req.url); // /abcd/abc
});
router.get("/book/:id", function(req, res, next) {
    console.log(req.url); // /book/2
});


// Request.query属性：获取GET请求参数
router.get("/goods", function(req, res, next) {
    // 浏览器地址栏输入/goods?id=2&name=商品
    console.log(req.query); // { id: '2', name: '商品' }
});


// Request.body属性：获取POST请求参数
router.post('/postApi', function(req, res, next) {
    console.log(req.body);
    // res.send()方法发送数据到页面显示
    res.send(req.body);
});


// Request.params属性：获取URL中的自定义参数
router.get("/book/:id", function(req, res, next) {
    console.log(req.url); // /book/2
    res.send(req.params); // { id: '2' }
});