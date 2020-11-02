const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const MovieSchema = new mongoose.Schema({
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    title:{
        type:String,
    },
    image:{
        type: String
    },
    summary:{
        type:String,
    },
    movieScore:{
        type: String
    }
    
})

module.exports = Movie = mongoose.model('movie', MovieSchema)