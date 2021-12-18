const userCompleteProfileSchema = require("../models/userCompleteProfile");

exports.completeProfileController = async (req,res)=> {
    
   

   const user = JSON.parse(req.profileData.completeProfileData);
   
  
  const email="piyushjaiswal380@gmail.com";
 



   const users = await userCompleteProfileSchema.findOne({email});    
   
   if(users) {
       
          console.log(user);
          await userCompleteProfileSchema.findOneAndUpdate({email},user,{new:true});

   }
   else{
     const newUser = await new userCompleteProfileSchema({
         email
     }).save();
     await userCompleteProfileSchema.findOneAndUpdate({email},user,{new:true});
     return res.json(newUser);
   }
   
    
  
};

