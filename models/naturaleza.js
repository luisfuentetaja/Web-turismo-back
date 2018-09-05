const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT distinct(categoria), categoria.nombre FROM senderismo, categoria WHERE categoria = categoria.id', (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}

exports.getAllCategoria = (categoria, done) => {
    db.get().query('SELECT id, imagen, nombre FROM senderismo WHERE categoria = ?',[categoria], (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}
exports.getOne = ( id, done) => {
    db.get().query('SELECT imagen, nombre, descripcion FROM senderismo WHERE id = ?',[ id], (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}