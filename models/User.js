const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   name:{
       type: String, 
       require: true
   },
   email:{
       type: String, 
       required: true
   }, 
   password:{
       type: String, 
       require: true
   }
})


module.exports = User = mongoose.model('user', UserSchema)