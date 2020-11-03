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
   },
   favorites: [
    {
      movie: {
        title: String,
        releaseDate: String,
        summary: String,
        
      }
    },
  ]
})

// const MovieSchema = new mongoose.Schema({
    
//   user: UserSchema,
//   title:{
//       type:String,
//   },
//   image:{
//       type: String
//   },
//   summary:{
//       type:String,
//   },
//   movieScore:{
//       type: String
//   }
  
// })




module.exports = User = mongoose.model('user', UserSchema)
