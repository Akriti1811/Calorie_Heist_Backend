const intakeFoodSchema = require("../models/intakeFood");

exports.intakeFood = async (req,res)=> {

// console.log(req.email);
// console.log(req.details);


const data = req.intakeFood;



const email = data.email;
const meal = {
    mealId:data.meal,
    gram:data.gram,
}
const arrayDemo = [meal];
const  dateNo = {
    date:new Date(),
    meal:arrayDemo,
}
const array = [dateNo];
//console.log(array);
const obj= {
    email:email,
    dateNo:array  
}

console.log(obj.dateNo[0].meal);

  intakeFoodSchema.create(obj,function(err,small){
  console.log(err);
  
 });

  const user = await intakeFoodSchema.findOne({email});
  return res.json(user);


}

