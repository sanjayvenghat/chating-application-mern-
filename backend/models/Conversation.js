
import mongoose from "mongoose"; 
let conversation=new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ], 
    messages:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
       
    
    }
]
}) 
let send=mongoose.model("Conversation",conversation) 
export default send