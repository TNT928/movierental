const express = require('express')
const Movie = require('../models/Movie')
const User = require('../models/User')
const router = express.Router()
const auth = require('../middleware/auth');

router.post('/', async (req, res)=>{
    
const {title, overview, poster_path, vote_average, user, id} = req.body

movie = new Movie({
        id,
        user,
        title, 
        overview,
        poster_path,
        vote_average
    })

   await movie.save()
res.json(movie)
})


router.get('/' , auth, async (req, res)=>{
   try {

       const movies = await Movie.find({user: req.user.id}).sort({date: -1})
       res.json(movies)
   } catch (error) {
       console.error(error.message)
       console.log(error.message)
   }
}) 

router.delete('/:id/delete', async  (req, res)=>{
    const movie = await Movie.findOneAndDelete({id: req.params.id} )
   

    if(!movie){
        res.send('Movie not found')
    } else{
       await movie.remove()
        res.send('movie deleted')
    }

})

module.exports = router