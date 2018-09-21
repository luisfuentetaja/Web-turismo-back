const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT distinct(categoria), categoria.nombre , categoria.imagen FROM personajes, categoria WHERE categoria = categoria.id', (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}

exports.getOneCategoria = (categoria, done) => {
    db.get().query('SELECT id, imagen, titulo FROM personajes WHERE categoria = ?',[categoria], (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}
exports.getOne = ( id, done) => {
    db.get().query('SELECT imagen, titulo, descripcion FROM personajes WHERE id = ?',[ id], (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}