// user 控制器
const { execSQL } = require('../db/connect')

module.exports = {
    userLogin: function (req) {
        let sql = `SELECT * FROM mac_actor where actor_id='${req.query.id}'`
        return execSQL(sql).then(sqlMessage => {
            return sqlMessage
        });
    },
 
}

