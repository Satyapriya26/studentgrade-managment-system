const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
     username : String,
    
    email :
     {
        type:String,
        unique : true,
    },
    mobileno : Number,
    password : String,
    },
    {
        
        collection : "register_details",
    }
);

 mongoose.model("register_details",UserDetailsSchema);
   

