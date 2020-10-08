const express = require('express')
const Movie = require('../models/Movie')
const router = express.Router()
const config = require('config')
const auth = require('../middleware/auth')
const axios = require('axios')



const param = config.get('apikey')


router.get('/', async(req, res)=>{
try {
     const res = await axios.get('https://www.balldontlie.io/api/v1/teams/28')
    const data = res
  res.send(data.data.city)
  
     
} catch (error) {
    res.send(error.message)
}
   
   
})


module.exports = router