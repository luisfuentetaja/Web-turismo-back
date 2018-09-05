var express = require('express');
var router = express.Router();
const modelNaturaleza = require ('../models/naturaleza.js')

router.get('/', (req, res)=>{
    console.log('error')
   modelNaturaleza.getAll((err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})

router.get('/cat/:categoria', (req, res)=>{
    console.log('error')
   modelNaturaleza.getAllCategoria(req.params.categoria, (err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})

router.get('/:id', (req, res)=>{
    console.log('error')
   modelNaturaleza.getOne(req.params.id, (err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})



module.exports = router;