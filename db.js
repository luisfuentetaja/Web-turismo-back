const mysql = require('mysql')
let pool = null

exports.connect = (done) => {
    pool = mysql.createPool({
        // host: '127.0.0.1',
        // user: 'root',
        // password: '',
        // database:'webturismo',
        host: 'eu-cdbr-west-02.cleardb.net',
        user: 'bc98861819afa8',
        password: '37b4811a',
        database: 'heroku_b5b45e98e7b2de8',
        port: 3306
    })
    done()
}
exports.get = () => {
    return pool
}