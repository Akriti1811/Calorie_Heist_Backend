const admin = require('../firebase')

exports.completeProfile = async (req,res,next) =>{
    
  try{
      
      req.profileData = req.body;
      
      
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