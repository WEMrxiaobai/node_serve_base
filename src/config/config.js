// config 文件  需要修改 imgBaseUrl地址 和 ipPort地址
web_config = {
    secretKey: 'userlogintoken1234567890',// 秘钥 secretKey
    DesTime: 60 * 60 * 3,// token 过期时间  DesTime
    imgBaseUrl: '', 
    ipPort: '',
}
module.exports = {
    web_config
}
