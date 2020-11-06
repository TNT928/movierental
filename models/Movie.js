const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MovieSchema = new mongoose.Schema({
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    id:{
        type:String,
    },
    
    title:{
        type:String,
    },
    poster_path:{
        type: String
    },
    overview:{
        type:String,
    },
    vote_average:{
        type: String
    }
    
})

module.exports = Movie = mongoose.model('movie', MovieSchema)