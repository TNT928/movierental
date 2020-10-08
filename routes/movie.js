const express = require('express')
const Movie = require('../models/Movie')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/', auth, async(req, res)=>{
    res.send('Movie page')
})

module.exports = router