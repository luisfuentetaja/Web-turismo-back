const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT id, imagen, titulo FROM monumentos', (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}

exports.getOne = (idMonumentos, done) => {
    db.get().query('SELECT imagen, titulo, descripcion FROM monumentos WHERE id = ?',[idMonumentos], (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}