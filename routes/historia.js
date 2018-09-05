var express = require('express');
var router = express.Router();
const modelHistoria = require ('../models/historia.js')

router.get('/', (req, res)=>{
    console.log('error')
   modelHistoria.getAll((err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})

router.get('/:id', (req, res)=>{
    console.log('error')
   modelHistoria.getOne(req.params.id, (err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})



module.exports = router;