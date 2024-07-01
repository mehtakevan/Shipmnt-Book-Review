const User = require("../models/userModel")
const generateToken = require("../utils/generateToken")

const registerUser = async (req, res) => {
    console.log(req.body)
    const { name,email, password} = req.body;
  
    if (!name || !email || !password ) {
      res.status(400).json({error : "Please Enter All the Details"});
      return;
    }
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400).json({error : "User already exists with provided email"})
      return;
    }
    try{
    const user = await User.create({
      name,
      email,
      password
    });
    if(user){
        res.status(200).send("User Created Successfully");
        return;
    }else{
        res.status(400).send("User Not Created");
        return;
    }
    }catch(error){
        res.status(500).json({error : error});
        return;
    }
  };
  const authUser = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.status(201).json({
        name : user.name,
        email : user.email,
        token : generateToken(user._id)
      });
      return;
    } else {
      res.status(401).json({error:"Invalid Email or Password"});
      return;
    }
  };

module.exports = {registerUser,authUser}