const userSchema = require("../models/user");

exports.createOrUpdateUser = async (req,res)=> {
    

    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;





    const user = await userSchema.findOneAndUpdate({email},{name,email},{new:true});
    
    if(user && user.password != password){
        res.json("Wrong Password");
        console.log("Wrong password");
    }
    else if(user && user.password == password)
    {
        res.json("Successfully logged In");
    }
    else{
        const newUser = await new userSchema({
            email,name,password
        }).save();
        res.json(newUser);

    }
};