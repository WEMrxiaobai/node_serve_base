// config 文件  需要修改 imgBaseUrl地址 和 ipPort地址
web_config = {
    secretKey: 'userlogintoken123456',// 秘钥 secretKey
    DesTime: 60 * 60 * 2,// token 过期时间  DesTime
    imgBaseUrl: '', 
    ipPort: '',
}
module.exports = {
    web_config
}
