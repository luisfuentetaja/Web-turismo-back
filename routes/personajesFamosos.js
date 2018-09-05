var express = require('express');
var router = express.Router();
const modelPersonajes = require ('../models/personajesFamosos.js')


router.get('/', (req, res)=>{
    console.log('error')
   modelPersonajes.getAll((err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})

router.get('/cat/:categoria', (req, res)=>{
    console.log('error')
   modelPersonajes.getAllCategoria(req.params.categoria, (err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})

router.get('/:id', (req, res)=>{
    console.log('error')
   modelPersonajes.getOne(req.params.id, (err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})


module.exports = router;