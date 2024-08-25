import Mongoose from "../models/Message.js"
export let dels=async(req,res)=>{ 
try 
{
let params=req.params.id   
if(!params)
{
    throw err
}
let dels=await Mongoose.findByIdAndDelete(params)   
res.json("message deleted successffully")
} 
catch(err)
{
    res.json(err)
}




}