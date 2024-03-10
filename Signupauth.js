const express =require('express')
const router = express.Router();

require('../server/server');

const User = require("../server/node_modules/Userdetails");
router.post('/register', async (req, res) =>{
    const {username , email , mobileno , password , repassword} = req.body;

    if(!username || !email || !mobileno || !password || !repassword){
      return console.log({ error : "Please fill all the properties" });
    }
    
    try{
       const userExist= await  User.findOne({ email:email });
       if(userExist){
        return res.status(422).json({ error : "Email Already exists" });
        
     } 
      const user =new User({username , email ,mobileno ,password ,repassword});
      const userRegister = await user.save();

      if(userRegister){
        console.log("saved succefully");
    
      }else{
        console.log(err);
      }

       
    }catch(err){
        console.log(err);
    }


  
});


module.exports = router;
