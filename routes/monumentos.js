var express = require('express');
var router = express.Router();
const modelMonumentos = require ('../models/monumentos.js')

router.get('/', (req, res)=>{
    console.log('error')
   modelMonumentos.getAll((err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})

router.get('/:id', (req, res)=>{
    console.log('error')
   modelMonumentos.getOne(req.params.id, (err, rows)=>{
       if (err) return console.log(rows)
       res.json(rows)
 })
})



module.exports = router;