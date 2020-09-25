const express = require('express')
const Movie = require('../models/Movie')
const router = express.Router()

router.get('/', async(req, res)=>{
    res.send('Movie page')
})

module.exports = router