const express = require('express')
const Movie = require('../models/Movie')
const router = express.Router()
const config = require('config')
const auth = require('../middleware/auth')
const axios = require('axios')






router.get('/', async(req, res)=>{

})


module.exports = router