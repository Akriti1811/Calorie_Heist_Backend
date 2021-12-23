const admin = require('../firebase')

exports.intakeAuthCheck = async (req,res,next) =>{
    
  try{
       req.intakeFood = req.body;
       next();
  }catch(err)
  {
      console.log(err);
      res.status(401).json({
          err:"Invalud or expired Token",
      })
      res.end();
  }
}