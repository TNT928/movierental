const express = require('express')
const Movie = require('../models/Movie')
const User = require('../models/User')
const router = express.Router()
const auth = require('../middleware/auth');

router.post('/', async (req, res)=>{
    
const {title, summary, image, movieScore} = req.body

    
movie = new Movie({
        user,
        title, 
        summary,
        image,
        movieScore
    })

   await movie.save()
res.send('movie saved')
})


router.get('/' , auth, async (req, res)=>{
   try {
    //    const user = await User.find({user: req.user.id})

       const movies = await Movie.find({user: req.user.id}).sort({date: -1})
       res.json(movies)
   } catch (error) {
       console.error(error.message)
   }
}) 

module.exports = router