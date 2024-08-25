import jwt from "jsonwebtoken"   
import User from "../user.model.js"
let protect=async(req,res,next)=>{  
    console.log(req.headers["access"])
let token=req.headers["access"] 
//token=req.cookies.jwt

if(!token) 
{ 
    res.json("no token found")
    
} 
else 
{ 
   
    let user=jwt.verify(token,process.env.SECRETKEY) 
    if(!user)
    {
        res.json("the token is invalid")
    } 
    else 
    { 
        let auther=await User.findById(user.userId).select("-password")
        req.user=auther
        next()
    }
}

} 
export default protect