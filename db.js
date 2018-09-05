const mysql = require ('mysql')
let pool = null

exports.connect= (done)=>{
pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database:'webturismo',
})
done()
}
exports.get = () =>{
    return pool
}