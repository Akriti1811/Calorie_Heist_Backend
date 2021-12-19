const drinkSchema = require("../models/drink");

exports.sendAllDrinks = async (req,res)=> {


  












    const u = await drinkSchema.find({},{_id:0,__v:0,createdAt:0,updatedAt:0}); 
      res.json(u);
//    if(users) {
//           console.log(user);
//          let tmp =  await userCompleteProfileSchema.findOneAndUpdate({email},user,{new:true});
//          console.log(tmp);
//          return res.json(tmp);
//    }
//    else{
//      const newUser = await new userCompleteProfileSchema({
//          email
//      }).save();
//       await userCompleteProfileSchema.findOneAndUpdate({email},user,);
//       const newUser2 = await userCompleteProfileSchema.findOne({email});
//      return res.json(newUser2);
//    }
};

