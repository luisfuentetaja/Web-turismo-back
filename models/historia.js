const db = require('../db')


//lamar a todas las categorias
exports.getAll = (done) => {
    db.get().query('SELECT id, imagen, titulo FROM historia', (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}
//lammar a una categoria concreta
exports.getOne = (idHistoria, done) => {
    db.get().query('SELECT imagen, titulo, descripcion FROM historia WHERE id = ?',[idHistoria], (err, rows) => {
        if (err) return done(err)
        done(null, rows)
    })
}
