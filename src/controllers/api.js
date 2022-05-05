// api 控制器
const { execSQL } = require('../db/connect')

module.exports = {
    selectVideo: function () {
        let sql = `SELECT * FROM mac_actor where actor_id='41013' `
        return execSQL(sql).then(sqlMessage => {
            // console.log("sqlMessage",sqlMessage[0].actor_name);
            return sqlMessage
        });
    },
    selectVideoID: function (req) {
        // console.log("req:",req.query.id);
        let sql = `SELECT * FROM mac_actor where actor_id='${req.query.id}'`
        return execSQL(sql).then(sqlMessage => {
            return sqlMessage
        });
    },
 
}

