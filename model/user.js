const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  
  password: {
    required: true,
    type: String,
  },
  
  type: {
    type: String,
    default: "user",
  },
  model:{
    required:true,
    type:[]
    
  }
  
});

const User = mongoose.model("User", userSchema);
module.exports = User;
