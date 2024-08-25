import User from "../user.model.js"
import bcrypt from "bcrypt" 
import generateJwtTokenAndSecretKey from "../utis/generateJwt.js" 
export const signup = async (req, res) => {
    try { 
       console.log(req.body)
        const { name:fullname, username, password, confirmpassword, gender } = req.body;
        
        if (password !== confirmpassword) {
            return res.status(400).json( "Passwords do not match.");
        }

        
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json(  "User already exists." );
        }

        let boyprofilePic = "https://avatar.iran.liara.run/public/36";
        let girlprofilePic = "https://avatar.iran.liara.run/public/67";
        let hash = await bcrypt.hash(password, 10);

        let newuser = await User.create({
            fullname,
            username,
            password: hash,
            gender,
            profilepic: gender === "male" ? boyprofilePic : girlprofilePic
        });
generateJwtTokenAndSecretKey(newuser._id,res)
        res.status(201).json(
            "Registered successfully"
        );
    } catch (err) {
        if (err.code && err.code === 11000) {
            // Duplicate key error
            return res.status(400).json({ message: "Username already exists." });
        }
        console.error('Signup Error:', err.message);
        res.status(500).json({ message: 'An error occurred during signup.' });
    }
};
export const login=async(req,res)=>{ 
     try 
     {
 const  {username:name,password}=req.body  
 
 let user=await User.findOne({username:name})  
const ispassword=await bcrypt.compare(password,user.password||"")
console.log(user,ispassword)

 if(!name || !ispassword)
{ 
    throw "invalid"
 } 
   console.log(generateJwtTokenAndSecretKey(user._id,res) )
   
   res.json({token:generateJwtTokenAndSecretKey(user._id,res),message:"login successfully"})
     } 
     catch(err)
     { 
        res.json("login failed") 
       }

    
} 
export const logout=(req,res)=>{  
    
    try 
    {
res.cookie("jwt","",{
    maxAge:0
}) 
res.status(200).json("logut successfully")  
    }
     
    catch(err)
    {
        res.status(400).json(err.message)
    }

} 

