const userCompleteProfileSchema = require("../models/userCompleteProfile");
const drinkSchema = require("../models/drink");
const pizzaSchema = require("../models/pizzas");

exports.completeProfileController = async (req,res)=> {


   





   const user = JSON.parse(req.profileData.completeProfileData);
   const email="piyush8@gmail.com";
   const users = await userCompleteProfileSchema.findOne({email});   
   if(users) {
          console.log(user);
         let tmp =  await userCompleteProfileSchema.findOneAndUpdate({email},user,{new:true});
         console.log(tmp);
         return res.json(tmp);
   }
   else{
     const newUser = await new userCompleteProfileSchema({
         email
     }).save();
      await userCompleteProfileSchema.findOneAndUpdate({email},user,);
      const newUser2 = await userCompleteProfileSchema.findOne({email});
     return res.json(newUser2);
   }
};

