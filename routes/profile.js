const express = require('express')
const Movie = require('../models/Movie')
const router = express.Router()
const auth = require('../middleware/auth')
const cors = require('cors')



router.get('/profile', auth, (req, res, next)=>{
    movie = new Movie
})

module.exports = router
