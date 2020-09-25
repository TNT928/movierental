const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    year:{
        type:Date
    },
    summary:{
        type:String,
    },
    runtime:{
        type:String
    }
})

module.exports = Movie = mongoose.model('movie', MovieSchema)