import User from "../user.model.js"
export let apps=async (req,res)=>{ 
    try 
    { 
    console.log(req.user+"is user")
    let users=await User.find({_id:{$ne:req.user.id}}).select("-password") 
    console.log(users)
    res.json({others:users,admin:{name:req.user.username,profile:req.user.profilepic,gender:req.user.gender}})  

    } 
    catch (err)
    {
       res.status(404).json("sorry you are not a valid user")
    }
   
}