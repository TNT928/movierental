const mongoose = require('mongoose')


const ProfileSchema = new mongoose.Schema({
   user:{
       type: mongoose.Schema.Types.ObjectId
   }
})

module.exports = Profile = mongoose.model('profile', )