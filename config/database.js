// database module
var mysql = require('mysql');
var config = {
    host: 'sql.freedb.tech',
    user: 'freedb_thanh',
    password: 'Gh#Gg2a9RJnZ#26',
    database: 'freedb_astore'
};

// init database
var pool = mysql.createPool(config);

//Fetch data
function RunQuery(sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            ShowErrors(err);
        }
        conn.query(sql, function (err, rows, fields) {
            if (err) {
                ShowErrors(err);
            }
            conn.release();
            callback(rows);
        });
    });
}

//Throw errors
function ShowErrors(err) {
    throw err;
}

module.exports = {
    RunQuery: RunQuery
};